
const KEY="gheaTactico01";
const fresh=()=>({characters:[],selected:null,quest:"none",location:"arca",gold:0});
let state=JSON.parse(localStorage.getItem(KEY)||"null")||fresh();
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const app=document.querySelector("#app");
const $=(s)=>document.querySelector(s);

function home(){
 app.innerHTML=`<section class="screen center"><h1>⚔️ GHEA TÁCTICO</h1><p class="sub">Prototipo 0.1</p>
 <button id="play">Jugar</button><p class="small">Partida guardada localmente en este dispositivo.</p></section>`;
 $("#play").onclick=characters;
}
function characters(){
 app.innerHTML=`<section class="screen"><h2>Aventureros</h2>
 <div id="chars"></div><button id="new">Crear Aventurero</button><button class="secondary" id="back">Volver</button></section>`;
 const box=$("#chars");
 if(!state.characters.length) box.innerHTML=`<div class="card">Todavía no creaste ningún Aventurero.</div>`;
 state.characters.forEach((c,i)=>{
   box.innerHTML+=`<div class="card"><b>${c.name}</b> · Humano Guerrero · Nivel ${c.level}<br>
   <span class="small">❤️ ${c.hp}/${maxHp(c)} · ⚡ Ini ${initiative(c)} · PA 4 · PM 3</span><br><br>
   <button onclick="enter(${i})">Seleccionar</button></div>`;
 });
 $("#new").onclick=createChar; $("#back").onclick=home;
}
function createChar(){
 app.innerHTML=`<section class="screen"><h2>Crear Aventurero</h2><div class="card grid2">
 <label>Nombre<input id="name" maxlength="16" value="Aventurero"></label>
 <label>Sexo<select id="sex"><option>Hombre</option><option>Mujer</option></select></label>
 <label>Raza<select><option>Humano</option><option disabled>Enano — próximamente</option><option disabled>Elfo — próximamente</option></select></label>
 <label>Clase<select><option>Guerrero</option><option disabled>Más clases — próximamente</option></select></label>
 <label>Altura<select id="height"><option>Baja</option><option selected>Media</option><option>Alta</option></select></label>
 <label>Peinado<select id="hair"><option>Peinado 1</option><option>Peinado 2</option></select></label>
 <label>Color de pelo<input id="hairColor" type="color" value="#4b2e1e"></label>
 <label>Color de ojos<input id="eyeColor" type="color" value="#4c8a55"></label>
 <label>Color de ropa<input id="clothColor" type="color" value="#355b86"></label>
 </div><button id="make">Crear</button><button class="secondary" id="cancel">Cancelar</button></section>`;
 $("#make").onclick=()=>{
   const c={name:$("#name").value.trim()||"Aventurero",sex:$("#sex").value,height:$("#height").value,
   hair:$("#hair").value,hairColor:$("#hairColor").value,eyeColor:$("#eyeColor").value,clothColor:$("#clothColor").value,
   level:1,xp:0,hp:14,gold:0,dev:0,offDamage:0,offLife:0,offIni:0,fury:0,defLife:0,opp:0,guard:0,defIni:0,robust:0,
   inventory:[],equipment:{weapon:"Espada básica",offhand:null,helmet:null,armor:null,boots:null,gloves:null,ring1:null,ring2:null,amulet:null}};
   state.characters.push(c); save(); characters();
 }; $("#cancel").onclick=characters;
}
function maxHp(c){return 14+c.offLife*2+c.defLife*2+c.robust*5+(c.equipment.boots==="Botas de tela"?2:0)}
function initiative(c){return 4+c.offIni+c.defIni}
window.enter=(i)=>{state.selected=i;save();world()};
function hero(){return state.characters[state.selected]}
function world(){
 const c=hero(); if(!c)return home();
 app.innerHTML=`<section class="screen"><div class="topbar"><b>${c.name} · Nv.${c.level}</b><span>❤️ ${c.hp}/${maxHp(c)} · ✨ ${c.xp}/10 · 🪙 ${c.gold}</span></div>
 <div class="world"><div class="building academy"></div><div class="path"></div>
 <div class="npc" id="mage">🧙</div><div class="hero">⚔️</div>${state.quest==="accepted"?'<div class="enemy" id="enemy">🗡️</div>':""}</div>
 <div class="actions"><button id="inv">Inventario</button><button id="tree">Desarrollo</button><button id="rest">Descansar</button><button class="secondary" id="menu">Personajes</button></div>
 <p class="small">${state.location==="arca"?"Arca y sus afueras — escenario conceptual del prototipo.":""}</p></section>`;
 $("#mage").onclick=questDialog; if($("#enemy"))$("#enemy").onclick=enemyGroup;
 $("#inv").onclick=inventory; $("#tree").onclick=tree; $("#menu").onclick=characters;
 $("#rest").onclick=()=>rest(c);
}
function questDialog(){
 let text,btn="";
 if(state.quest==="none"){text="Se ha detectado un grupo de bandidos en las afueras de Arca. Encárgate de ellos y regresa.";btn='<button id="accept">Aceptar misión</button>'}
 else if(state.quest==="accepted"){text="El grupo sigue en las afueras. Regresa cuando hayas acabado con ellos."}
 else if(state.quest==="done"){text="Buen trabajo. Has cumplido tu misión.";btn='<button id="turnin">Entregar misión (+4 EXP, +5 oro)</button>'}
 else{text="Continúa con tu entrenamiento, Aventurero."}
 modal(`<h3>Maestro de Arca</h3><p>${text}</p>${btn}`);
 if($("#accept"))$("#accept").onclick=()=>{state.quest="accepted";save();closeModal();world()};
 if($("#turnin"))$("#turnin").onclick=()=>{let c=hero();c.xp+=4;c.gold+=5;state.quest="turned";levelCheck(c);save();closeModal();world()};
}
function enemyGroup(){
 modal(`<h3>Grupo de Bandidos</h3><p>🐗 Jabalí<br>🗡️ Bandido con Daga<br>🏹 Bandido con Ballesta</p>
 <button id="fight">Combatir</button>`);
 $("#fight").onclick=()=>{closeModal();battle()};
}
function battle(){
 // Base visual jugable: el motor táctico completo se desarrolla sobre esta pantalla.
 const obstacles=new Set(["3,3","3,4","6,5","6,6","7,6"]);
 let tiles="";
 for(let y=0;y<10;y++)for(let x=0;x<10;x++){
   let cls=obstacles.has(`${x},${y}`)?" obstacle":"";
   let txt="";
   if(x===1&&y===5)txt="⚔️";
   if(x===4&&y===5)txt="🗡️";
   if(x===7&&y===3)txt="🏹";
   if(x===8&&y===8)txt="🐗";
   tiles+=`<div class="tile${cls}${txt?" unit":""}">${txt}</div>`;
 }
 app.innerHTML=`<section class="screen"><div class="topbar"><b>Combate · Ronda 1</b><span>⏱️ 30s</span></div>
 <div class="card small">Orden: ⚔️ Guerrero (4) → 🐗/🗡️ (3) → 🏹 (2)</div>
 <div class="battle-grid">${tiles}</div>
 <div class="card"><b>Prototipo del campo 10×10</b><p class="small">Esta primera base deja preparado el tablero. El siguiente bloque implementará movimiento, PA/PM, habilidades, IA y resolución real del combate.</p>
 <button id="testWin">Simular victoria para probar el ciclo</button></div></section>`;
 $("#testWin").onclick=()=>{rewardAll();state.quest="done";save();world()};
}
function rewardAll(){
 const c=hero(); c.xp+=6;
 const gold=(1+Math.floor(Math.random()*2))+(2+Math.floor(Math.random()*3))+(2+Math.floor(Math.random()*3));
 c.gold+=gold;
 const drops=[];
 if(Math.random()<.40)drops.push("Piel de jabalí");
 if(Math.random()<.15)drops.push("Colmillo de jabalí");
 if(Math.random()<.10)drops.push("Daga oxidada");
 if(Math.random()<.15)drops.push("Botas de tela");
 if(Math.random()<.10)drops.push("Ballesta rota");
 if(Math.random()<.15)drops.push("Botas de tela");
 drops.forEach(x=>addItem(c,x)); levelCheck(c);
}
function addItem(c,item){if(c.inventory.length<12)c.inventory.push(item)}
function levelCheck(c){if(c.level===1&&c.xp>=10){c.level=2;c.dev+=2;alert("¡Nivel 2! Obtienes 2 Puntos de Desarrollo.")}}
function inventory(){
 const c=hero(); const slots=Object.entries(c.equipment).map(([k,v])=>`<div class="stat"><b>${k}</b><br>${v||"—"}</div>`).join("");
 app.innerHTML=`<section class="screen"><h2>Inventario</h2><div class="card"><div class="stats">${slots}</div></div>
 <div class="card"><b>Mochila básica · ${c.inventory.length}/12</b><p>${c.inventory.length?c.inventory.join("<br>"):"Vacía"}</p></div>
 <button class="secondary" id="back">Volver</button></section>`; $("#back").onclick=world;
}
function tree(){
 const c=hero();
 app.innerHTML=`<section class="screen"><h2>Desarrollo · ${c.dev} puntos</h2>
 <div class="card"><h3>⚔️ Ofensiva</h3>
 ${node("Daño base +1", "offDamage",3,c)}
 ${node("Vida +2","offLife",5,c,c.offDamage<1)}
 ${node("Iniciativa +1","offIni",1,c,c.offDamage<1)}
 ${node("Furia","fury",2,c,c.offDamage<1)}</div>
 <div class="card"><h3>🛡️ Defensa</h3>
 ${node("Vitalidad +2 Vida","defLife",3,c)}
 ${node("Ataque de oportunidad +1","opp",1,c,c.defLife<1)}
 ${node("Guardia +2 Escudo al inicio","guard",1,c,c.defLife<1)}
 ${node("Iniciativa +1","defIni",1,c,c.defLife<1)}
 ${node("Robustez +5 Vida","robust",2,c,c.defLife<3)}</div>
 <button class="secondary" id="back">Volver</button></section>`;
 document.querySelectorAll("[data-node]").forEach(b=>b.onclick=()=>spend(b.dataset.node));
 $("#back").onclick=world;
}
function node(label,key,max,c,locked=false){return `<p>${label}: ${c[key]}/${max} <button data-node="${key}" ${locked||c.dev<1||c[key]>=max?"disabled":""}>+</button></p>`}
function spend(key){const c=hero();if(c.dev<1)return;c[key]++;c.dev--;c.hp=Math.min(c.hp,maxHp(c));save();tree()}
function rest(c){
 if(c.hp>=maxHp(c)){alert("Ya tienes la Vida completa.");return}
 modal(`<h3>Descanso</h3><p id="restText">Recuperando Vida… ${c.hp}/${maxHp(c)}</p><button id="stop">Terminar descanso</button>`);
 const t=setInterval(()=>{if(c.hp<maxHp(c)){c.hp++;save();$("#restText").textContent=`Recuperando Vida… ${c.hp}/${maxHp(c)}`}else{clearInterval(t)}},5000);
 $("#stop").onclick=()=>{clearInterval(t);closeModal();world()};
}
function modal(html){document.body.insertAdjacentHTML("beforeend",`<div class="modal" id="modal"><div class="card">${html}<br><button class="secondary" onclick="closeModal()">Cerrar</button></div></div>`)}
window.closeModal=()=>$("#modal")?.remove();
home();
