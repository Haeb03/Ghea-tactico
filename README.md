# Ghea Táctico v0.2.9.13 — Motor de encuentros

Primer bloque grande de la nueva etapa, construido sobre v0.2.8.40.

## v0.2.9.10 — Hotfix Liberar cautivo
- Corrige la acción de rescate: al quedar adyacente al cautivo durante el turno de Aron aparece **🔓 Liberar** en la barra principal de combate.
- Liberar cuesta 1 PA y activa inmediatamente la IA de escape del carretero.
- No modifica la niebla ni el resto del flujo de la misión.

## Nuevo comienzo
- Personajes nuevos comienzan en Nivel 1, 0 EXP y 0 puntos.
- Guerrero: Iniciativa 5, PA 4, PM 3.
- Vida base 10.
- Armadura básica de cuero: +1 Vida.
- Botas básicas de cuero: +1 Vida.
- Vida inicial efectiva: 12.
- Sin arma: Ataque Normal 1 daño, 1 PA, adyacente.
- Espada de entrenamiento: +1 daño; Ataque Normal = 2.
- Ataque Normal limitado a 2 usos por turno.

## Progresión recuperada de v0.3.0.8
- Nv.1→2: 2 EXP.
- Desde Nv.2: 5 EXP y crecimiento ×1,6 redondeado.
- +1 Punto de Desarrollo por nivel.
- Niveles 4, 8, 12, 16... entregan +2 en lugar de +1.
- Se mantiene el árbol de Desarrollo existente como base temporal.

## Arca reprogramada
Arca pasa a ser un hub de 1000×1000 con:
- Academia Arca
- Gran Biblioteca
- Herrería
- Carpintería
- Textiles y Cuero
- Joyería
- Tienda General
- Taberna
- Posada
- Plaza Central
- Puerta Oeste

Los edificios usan el nuevo sistema de interiores: al entrar se abre una pantalla 2D independiente con identidad visual y menú de acciones. Es un motor común para todos los establecimientos.

## Tutorial
Se conecta el nuevo personaje con el comienzo del tutorial:
Maestro → Espada de entrenamiento → equipar → Muñeco de Paja → regreso al Maestro.

La siguiente parte del tutorial conservará la secuencia de v0.3.0.8: Desarrollo, Golpe Fuerte, Bloqueo, Descanso, objetos y traslado de cuerpos.

## Campaña
- La misión principal de bandidos deja de ser la salida de Arca.
- La Puerta Oeste queda como salida de la campaña nueva.
- Tras completar el tutorial, el siguiente objetivo será la misión de la carreta en Zona Oeste.
- El contenido de la carreta se implementará sobre el mapa Oeste actual.

## Conservado
Todo el trabajo visual/técnico de v0.2.8.40 en Zona Oeste y combate se mantiene.


## Correcciones v0.2.9.1
- Exploración móvil contenida en la pantalla: ficha del personaje y barra inferior de acciones permanecen visibles.
- Corregida la aproximación a edificios: el personaje camina a la puerta exterior y ya no intenta llegar al centro bloqueado del edificio.
- Academia accesible para iniciar el tutorial del Maestro.
- Habilidades corregidas: un personaje nuevo no muestra ni puede equipar habilidades todavía no aprendidas.
- Desarrollo reemplazado por la estructura final de v0.3.0.8: selector Ofensiva/Defensa y ramas con Golpe Fuerte/Bloqueo, Fuerza/Vitalidad/Iniciativa/Oportunidad/Furia/Robustez/Guardia según requisitos.

## Corrección crítica v0.2.9.2
- La barra de acciones de exploración queda anclada al borde inferior del viewport.
- Inventario, Habilidades, Desarrollo, Personajes y Descansar permanecen accesibles en todo momento.
- El mapa ocupa únicamente el espacio central restante y hace scroll internamente.
- Se reserva físicamente el alto de la barra para impedir que el mapa la tape o la empuje fuera de pantalla.
- Se contiene el contenido del mapa de Arca para evitar desbordes laterales visibles.

## Correcciones v0.2.9.3
- Muñeco de Paja: 6 Vida, 3 PM, 2 PA, Iniciativa 3.
- Ataque Normal del Muñeco: 1 daño, adyacente, 2 PA.
- El Muñeco ahora usa sus 3 PM para acercarse y ataca cuando queda adyacente.
- Se acercó su posición inicial para que el combate tutorial empiece más rápido.
- La cámara de exploración guarda su posición por zona.
- Al volver desde Inventario, Habilidades, Desarrollo o un interior, se restaura la misma vista del mapa.

## Bloque grande v0.2.9.4
Se integró el recorrido completo del tutorial de v0.3.0.8 sobre la nueva Arca:
1. Espada de entrenamiento y combate básico.
2. Nivel 2 y aprendizaje de Golpe Fuerte desde Desarrollo.
3. Prueba ofensiva.
4. Nivel 3 y aprendizaje de Bloqueo.
5. Prueba defensiva contra dos Muñecos.
6. Lección de Descanso.
7. Poción de Vida y uso de objetos durante combate contra el Maestro.
8. Traslado de un cuerpo hasta una zona marcada.
9. Finalización del tutorial y habilitación de la Puerta Oeste.

Se mantienen los valores corregidos del Muñeco: 6 Vida, 3 PM, 2 PA, Ini 3, ataque adyacente de 1 daño por 2 PA.
La misión de la carreta queda como siguiente bloque después de cruzar la Puerta Oeste.

## Correcciones v0.2.9.5
- El Maestro entrega efectivamente una Poción de Vida justo antes de la prueba de objetos.
- Usar esa Poción de Vida completa la lección.
- Si el ejercicio se reabre sin la poción, se repone para evitar bloquear el tutorial.
- La prueba de traslado ya no usa la condición normal de victoria por enemigos derrotados.
- Para completarla es obligatorio levantar realmente el cuerpo, transportarlo y soltarlo dentro de la casilla objetivo.
- Se validan por separado los estados “cuerpo levantado” y “cuerpo depositado”.

## Corrección v0.2.9.6
- Poción de Vida: Consumible, recupera 4 de Vida.
- Ahora aparece en Objetos durante combate.
- Cura 4 y se consume al usarla.
- Usarla durante la prueba del Maestro finaliza esa lección.


## v0.2.9.7 — Misión de la Carreta de Loren
- El Maestro entrega el encargo tras el tutorial y un Kit de viajero: Vendas, Poción de Vida y 10 Oro.
- Carreta atacada en Zona Oeste, investigación y dos rastros (norte/sur).
- Carretero herido: las Vendas permiten Primeros Auxilios y otorgan +1 EXP adicional; sin ellas muere.
- Ruinas con rescate de un cautivo y 3 Varkhams.
- Varkham: Vida 10, PM 3, PA 3, Iniciativa 4; Ataque Normal 2/1 PA; Acecho 2 daño + Herida/2 PA; Corte 1 daño + Herida/3 PA.
- Cada Varkham entrega 2 EXP. Objetivos principales entregan 2 EXP.
- El cautivo comienza 6/8 Vida, Herida x1 y, al ser liberado, intenta escapar con 3 PM.
- Regreso a la carreta: el paquete oculto desapareció.
- Cierre en Arca: Maestro → Director → Gran Biblioteca. La gema se identifica como incrustada en una daga del Rey Demonio.
- Recompensa final del encargo: 20 Oro.
- Vendas eliminan todas las cargas de Herida en combate.
- Estado de la misión persistente en el guardado.


## v0.2.9.10 — Estabilización de la misión
- Versión visible del Inicio sincronizada con README y caché PWA.
- Corregidos botones sin acción en la investigación de la carreta, regreso a Arca e informe al Maestro.
- Los dos rastros (norte y sur) deben resolverse antes de cerrar la investigación de la carreta; pueden hacerse en cualquier orden.
- Se protegen de obstáculos naturales las zonas de la carreta, el herido y las ruinas.
- La EXP de los 3 Varkhams se registra de forma persistente y no puede farmearse repitiendo un rescate fallido.
- Se mantiene la regla de Venda: elimina todas las cargas de Herida en combate.


### v0.2.9.10
- El cautivo que alcanza el borde seguro ahora sale del combate sin convertirse en cadáver.
- Se preserva la niebla de guerra durante el rescate.
- La acción Liberar cautivo sigue disponible al quedar adyacente y cuesta 1 PA.


## v0.2.9.11 — Recarga real de PWA
- Inicio muestra v0.2.9.11.
- `sw.js` usa una clave de caché nueva para forzar la actualización.
- Mantiene la corrección del cautivo al alcanzar el borde seguro.
- La niebla sigue siendo manejada por el código de exploración integrado en `app.js`/`styles.css`; no se eliminan los archivos `fog0299.js/css` que ya estén en GitHub.


## v0.2.9.12 — Restauración de niebla
- `index.html` vuelve a cargar explícitamente `fog0299.css` y `fog0299.js`.
- `fog0299.js` conserva sólo la niebla/exploración; se retiró su segunda implementación de Liberar para evitar dos overrides de `renderBattle`.
- Se mantiene el rescate corregido de v0.2.9.11.
- Caché renovada y archivos de niebla incluidos en el service worker.

## v0.2.9.13 — Motor de encuentros
- Gran Biblioteca: recompensa final de la Carreta = 20 Oro + 6 EXP.
- El rescate de los Varkhams toma un sector real 10×10 del mapa Oeste y conserva terreno/obstáculos.
- Despliegue inicial variable estilo Dofus: las casillas válidas dependen del lado de aproximación, obstáculos y sector.
- Jabalíes: patrulla ampliada, posición real usada al entrar en combate y respawn individual de 1 minuto.
- Los enemigos de misión no respawnean.
