/* Ghea Táctico v0.2.9.9 — exploración, niebla y ajustes de la Carreta */
(()=>{
 const FOG_RADIUS=4;
 const WEST=mapData.west;
 // Ritmo de exploración: la carreta queda más adentro y los dos rastros se separan con claridad.
 CARRIAGE_POINTS.cart.x=960; CARRIAGE_POINTS.cart.y=960;
 CARRIAGE_POINTS.injured.x=1216; CARRIAGE_POINTS.injured.y=320;
 CARRIAGE_POINTS.ruins.x=448; CARRIAGE_POINTS.ruins.y=1664;
 CARRIAGE_POINTS.captive.x=CARRIAGE_POINTS.ruins.x; CARRIAGE_POINTS.captive.y=CARRIAGE_POINTS.ruins.y;
 CARRIAGE_POINTS.varkhams.x=520; CARRIAGE_POINTS.varkhams.y=1600;

 function fogState(c){
   if(!c.explorationFog)c.explorationFog={};
   if(!Array.isArray(c.explorationFog.west))c.explorationFog.west=[];
   return c.explorationFog.west;
 }
 function key(x,y){return `${x},${y}`}
 function heroCell(){let c=hero(),p=c?.worldPos?.west;if(!p)return null;return{x:Math.floor(p.x/WEST.cell),y:Math.floor(p.y/WEST.cell)}}
 function visibleFrom(h,x,y){return !!h && Math.abs(x-h.x)+Math.abs(y-h.y)<=FOG_RADIUS}
 function revealAroundHero(){
   let c=hero(),h=heroCell();if(!c||c.location!=='west'||!h)return;
   let known=new Set(fogState(c)),changed=false;
   for(let y=0;y<WEST.rows;y++)for(let x=0;x<WEST.cols;x++)if(visibleFrom(h,x,y)&&!known.has(key(x,y))){known.add(key(x,y));changed=true}
   if(changed){c.explorationFog.west=[...known];save()}
 }
 function tileOfElement(el){
   let x=parseFloat(el.dataset.ax),y=parseFloat(el.dataset.ay);
   if(!Number.isFinite(x))x=parseFloat(el.style.left)||0;
   if(!Number.isFinite(y))y=parseFloat(el.style.top)||0;
   return{x:Math.floor(x/WEST.cell),y:Math.floor(y/WEST.cell)};
 }
 function updateEntityVisibility(){
   let c=hero(),h=heroCell();if(!c||c.location!=='west'||!h)return;let known=new Set(fogState(c));
   // Obstáculos naturales son memoria del terreno: aparecen al descubrirse y permanecen luego.
   document.querySelectorAll('.map-west .west-prop').forEach(el=>{let t=tileOfElement(el);el.classList.toggle('fog-hidden-static',!known.has(key(t.x,t.y)))});
   // Actores móviles sólo existen visualmente dentro del campo de visión actual.
   document.querySelectorAll('.map-west .boar-patrol,.map-west #guard').forEach(el=>{let t=tileOfElement(el);el.classList.toggle('fog-hidden-dynamic',!visibleFrom(h,t.x,t.y))});
   // Puntos de misión se descubren físicamente. Una vez vistos quedan registrados en el mapa.
   document.querySelectorAll('.map-west .mission-world-object').forEach(el=>{let t=tileOfElement(el),k=`poi:${el.id}`;if(visibleFrom(h,t.x,t.y))c.explorationFog[k]=true;el.classList.toggle('fog-hidden-static',!c.explorationFog[k])});
 }
 function paintFog(){
   let c=hero(),map=document.querySelector('.map-west');if(!c||c.location!=='west'||!map)return;
   revealAroundHero();let h=heroCell(),known=new Set(fogState(c)),layer=document.getElementById('westFogLayer');
   if(!layer){layer=document.createElement('div');layer.id='westFogLayer';layer.className='fog-grid';layer.style.setProperty('--fog-cell',WEST.cell+'px');
     let frag=document.createDocumentFragment();for(let y=0;y<WEST.rows;y++)for(let x=0;x<WEST.cols;x++){let t=document.createElement('i');t.dataset.x=x;t.dataset.y=y;frag.appendChild(t)}layer.appendChild(frag);map.appendChild(layer)}
   layer.querySelectorAll('i').forEach(t=>{let x=+t.dataset.x,y=+t.dataset.y;t.className=visibleFrom(h,x,y)?'fog-visible':known.has(key(x,y))?'fog-explored':'fog-unknown'});
   updateEntityVisibility();
 }
 function installFogObserver(){
   let c=hero(),h=document.getElementById('worldHero');if(!c||c.location!=='west'||!h)return;paintFog();
   let queued=false;const tick=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;paintFog()})};
   new MutationObserver(tick).observe(h,{attributes:true,attributeFilter:['style']});
 }
 // Arca es una zona conocida: nunca recibe niebla. La niebla se activa sólo en mapas de exploración desconocida.
 const world0299Base=world;
 world=function(){world0299Base();requestAnimationFrame(()=>requestAnimationFrame(installFogObserver))};

 // Refuerzo del rescate: el botón de liberar siempre aparece en el turno del héroe al quedar adyacente.
 const renderBattle0299Base=renderBattle;
 renderBattle=function(){
   renderBattle0299Base();if(!B||B.encounter!=='varkhamRescue'||B.rescueFreed)return;
   let cap=getU('captive'),h=getU('hero');if(!cap?.alive||!h?.alive||cur()?.type!=='hero'||!adj8(h,cap)||document.getElementById('freeCaptive0299'))return;
   let host=document.querySelector('.battle-actions')||document.querySelector('.combat-actions')||document.querySelector('.battle-screen .actions')||document.querySelector('.battle-screen');if(!host)return;
   let b=document.createElement('button');b.id='freeCaptive0299';b.className='free-captive-action';b.textContent='🔓 Liberar prisionero · 1 PA';b.onclick=()=>{if(h.pa<1)return toast('Necesitás 1 PA.');h.pa--;B.rescueFreed=true;cap.immobilized=false;B.log.push('🔓 Prisionero liberado. Intentará escapar con 3 PM.');renderBattle()};host.prepend(b);
 };
})();
