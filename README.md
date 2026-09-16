# Ghea Táctico v0.2.8.9 — Alineación de casillas

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


## v0.2.8.9 — anclaje de peana
- Ajuste visual puntual: el centro de la peana se alinea con el centro de la casilla lógica.
- Se conserva la corrección 10×10 y los resaltados 1×1 de v0.2.8.8.
- No se modifican movimiento, alcance, IA ni reglas de combate.
