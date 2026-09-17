# Ghea Táctico v0.2.8.20 — Afueras de Arca — Oeste

Base recuperada: **v0.2.8.2 — enemigos**, última base previa a las pruebas descartadas de caminata por frames.

## Cambios de esta versión
- Nuevo sistema visual de **miniaturas estilo juego de mesa**.
- Guerrero Humano, Jabalí, Bandido con Daga y Bandido con Ballesta cargan desde `assets-miniaturas/`.
- Se conservan las cuatro orientaciones: abajo, arriba, izquierda y derecha.
- Exploración usa la miniatura del arquetipo Humano Guerrero y la desliza durante el movimiento; el nombre del personaje no interviene.
- No hay frames ni mecánica visual de caminata.
- Se mantienen intactas las reglas de movimiento, rutas, colisiones, PM y combate de la base 0.2.8.2.
- HUD de combate recuperado: Vida/Escudo compacto arriba de la barra de Vida para no tapar la miniatura.
- Versión visible en Inicio y título del navegador actualizados.

## Assets
Las 16 PNG nuevas deben existir en `assets-miniaturas/` en GitHub. Esta entrega no las duplica porque ya fueron subidas al repositorio.


## v0.2.8.7 — corrección visual
- Eliminado el rectángulo/casilla coloreada que aparecía detrás de la miniatura activa en combate.
- Eliminado el recuadro de fondo/borde del Guerrero en Exploración.
- Contenedores visuales desacoplados del tamaño de la imagen para evitar que la miniatura se estire con la casilla.
- La miniatura mantiene proporción y queda anclada por la peana abajo-centro.
- Esta revisión no agrega todavía imágenes nuevas de tablero, árbol ni roca; quedan para la siguiente etapa visual.
- Próximo sistema planificado: Exploración piloto 30×30 y combate como recorte 10×10 del mismo tablero.


## v0.2.8.8 — alineación de tablero
- La cuadrícula de combate queda forzada a 10×10 filas/columnas de igual tamaño.
- Las miniaturas ya no modifican el alto de las filas.
- La peana queda anclada visualmente sobre el centro de su casilla lógica.
- Los resaltados de despliegue, movimiento y objetivo permanecen exactamente en una sola casilla 1×1.
- No se modificaron reglas, coordenadas, alcances ni mecánicas de combate.


## v0.2.8.10 — anclaje de peana
- Ajuste visual puntual: el centro de la peana se alinea con el centro de la casilla lógica.
- Se conserva la corrección 10×10 y los resaltados 1×1 de v0.2.8.8.
- No se modifican movimiento, alcance, IA ni reglas de combate.


## v0.2.8.13 — Bosque del Oeste 30×30
- Bosque del Oeste pasa a tablero lógico de 30×30 casillas (48 px por casilla en el prototipo).
- Cámara/viewport móvil centrada en el Aventurero durante el movimiento.
- Pathfinding generalizado para respetar dimensiones de cada escena.
- Arca, Afueras e interiores conservan sus dimensiones actuales.
- HUD de Vida/Escudo de combate elevado para no tapar la cara de la miniatura.
- Sin arte nuevo: esta versión prueba estructura, cámara, movimiento y límites.

## v0.2.8.13 — escala unificada y encuentro persistente
- Bosque del Oeste mantiene 30×30, ahora con casillas de 64 px para aproximar la escala visual del combate.
- La miniatura del Aventurero conserva una escala equivalente a la del tablero táctico.
- Los grupos de jabalíes se muestran como miniaturas sobre peana, no como fichas circulares/emoji.
- Al iniciar una manada se registra el sector 10×10 del mapa grande alrededor del encuentro (base para trasladar terreno/obstáculos en la siguiente etapa visual).
- Tras vencer una manada, ese encuentro queda eliminado del mapa para ese Aventurero.
- Al terminar el combate se conserva la posición de exploración y se vuelve al mismo mapa.


## v0.2.8.13 — zoom táctil y HUD compacto
- Bosque 30×30: pellizco con dos dedos para acercar/alejar.
- Botones −/+ como alternativa y porcentaje visible.
- Zoom persistente por personaje, con límites 42%–115%.
- Cámara centrada en Aron y limitada a los bordes del mapa.
- El zoom y la posición se conservan al regresar del combate.
- HUD de Vida/Escudo contenido dentro de la casilla de cada combatiente para no invadir casillas vecinas.


## v0.2.8.14 — cámara libre y HUD
- Exploración del Bosque: arrastre con un dedo para mover libremente la cámara.
- Pellizco con dos dedos para acercar/alejar.
- Eliminados los botones +/− de zoom.
- Botón 🎯 para volver a centrar la cámara en el Aventurero.
- La cámara ya no sigue automáticamente al Aventurero mientras camina.
- Se guardan zoom y posición de cámara para recuperar la vista al volver del combate.
- HUD de combate vuelve a mostrar Vida + Escudo cuando corresponde y queda compacto dentro de la casilla de su unidad.


## v0.2.8.20 — Afueras de Arca — Oeste
- Integrado el fondo aprobado de la llanura exterior occidental de Arca en el tablero de exploración 30×30.
- La muralla y la Puerta Oeste forman parte del fondo fijo.
- Se conserva la cuadrícula lógica de 64 px por casilla sobre el arte.
- Se retiraron los obstáculos provisionales de esta escena; árboles, rocas y otros elementos tácticos se incorporarán después como piezas independientes.
- Se conserva sin cambios la cámara libre: arrastre con un dedo, zoom con dos dedos y botón de centrado.
- No se modificaron las mecánicas de combate.


## v0.2.8.20
- Recupera la cuadrícula 30×30 sobre Afueras de Arca — Oeste.
- Los encuentros del mapa Oeste trasladan al combate el sector real 10×10 del mismo tablero.
- Sobre las miniaturas queda sólo Vida actual/máxima y una barra fina.
- Nueva ficha inferior de combatiente con avatar, Vida, Escudo, PA/PM y Estados.
- Sin cambios intencionales en las mecánicas de combate.

## v0.2.8.20 — prueba controlada de obstáculos
- Parte nuevamente de v0.2.8.16; v0.2.8.17 queda descartada.
- Obstáculos de Afueras Oeste nacen de casillas lógicas 30×30 con semilla fija y se dibujan desde esas coordenadas.
- Muralla del borde este bloquea exploración; el corredor de la puerta queda libre.
- Los mismos bloqueos se proyectan al sector táctico 10×10.
- Enemigos eligen casillas iniciales válidas aleatorias dentro de su zona, evitando obstáculos y despliegue aliado.
- Las casillas de despliegue del Aventurero se filtran contra obstáculos.
- Se conservan los dos encuentros de jabalíes y su activación original; se corrigió además su índice al quedar un solo grupo.
- Ajustes visuales: Vida más arriba de miniaturas, avatar reencuadrado y rango de movimiento más legible.
- Obstáculos todavía usan formas provisionales: las imágenes definitivas se incorporarán después de validar la lógica.


## v0.2.8.20
- Corrige posiciones antiguas en bordes del mapa Oeste, ajustándolas al centro de una casilla válida.
- Restaura los dos encuentros de jabalíes como encuentros repetibles del prototipo.
- Sube Vida actual/máxima y su barra para no cubrir las miniaturas.
- Actualiza versión visible de Inicio y caché del Service Worker.

## v0.2.8.20 — Nueva interfaz de combate
- Cabecera compacta con ronda, combatiente activo, temporizador e iniciativa.
- Se elimina la repetición de Vida/Escudo/PA/PM en la parte superior.
- Ficha inferior ampliada con avatar, Vida, Escudo, PA/PM y estados.
- Botonera principal: Mover, Ataque, Habilidades, Objeto y Fin turno.
- Las habilidades equipadas se muestran en un panel desplegable.
- Descripción contextual de acciones compactada.
- Se conserva el tamaño del tablero 10×10 y la lógica de combate existente.
