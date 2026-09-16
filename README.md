# Ghea Táctico 0.2.8.3 — Caminata en Exploración

Versión de prueba construida desde la última build funcional de 0.2.8.2.

## Últimos cambios

- Se conserva la integración visual modular del combate: terreno, obstáculos, Guerrero y enemigos por sprites independientes.
- Se conserva el HUD compacto de Vida/Escudo para no tapar los personajes.
- Se mantienen los 4 sprites direccionales del Guerrero y los 8 frames adicionales de caminata.
- La prueba de caminata se trasladó a Exploración para poder observar movimientos continuos.
- Los frames de caminata se precargan antes de usarse.
- El Guerrero se desplaza suavemente entre posiciones y al detenerse vuelve al frame de reposo de su última dirección.
- Se corrigió el error de JavaScript de la build experimental anterior que dejaba la app en pantalla vacía.
- La pantalla de Inicio y el título del navegador muestran ahora la versión 0.2.8.3.
- El caché de la PWA usa una clave nueva para distinguir esta build.

## Regla de versiones desde ahora

Cada ZIP nuevo debe actualizar este README, el número de versión visible en Inicio, el título del navegador y la clave de caché del service worker.

## Base estable

Las mecánicas siguen tomando como referencia la versión 0.2.7.4; los cambios 0.2.8.x se concentran en la capa visual y sus pruebas.
