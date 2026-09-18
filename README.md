# Ghea Táctico v0.2.8.36 — Miniaturas ampliadas

Base: **v0.2.8.35**.

## Cambio de esta versión

Se modifica únicamente el **tamaño visual de las miniaturas en combate**.

- Altura visual: de 118% a 160% respecto de la casilla.
- Se amplía el límite horizontal para conservar la proporción del PNG.
- La miniatura sigue creciendo desde el mismo punto de anclaje de la peana establecido en v0.2.8.35.

## Se mantiene exactamente igual

- Centro de la peana.
- Posición de `Vida` y barra.
- Casilla lógica.
- Movimiento, PA, PM y alcance.
- Despliegue.
- Colisiones y pathfinding.
- Obstáculos y sus huellas.
- Eliminación de los óvalos.
- Posición del personaje al regresar del combate.

La finalidad es comprobar si, al recuperar una escala apropiada para la cuadrícula, la cabeza de la miniatura se aproxima naturalmente al HUD sin volver a desplazar ningún elemento.
