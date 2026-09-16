# Ghea Táctico 0.2.8.4 — Sprite animado en Exploración

Build de prueba visual basada en la 0.2.8.3 funcional.

## Últimos cambios

- Aron deja de representarse como ficha circular en Exploración: ahora usa el sprite direccional del Guerrero.
- La caminata de Exploración usa Paso 1 → Reposo → Paso 2 según la dirección del recorrido.
- Al detenerse, el Guerrero conserva la última dirección y vuelve a su frame de reposo.
- Se mantienen precargados los frames de caminata para reducir parpadeos.
- Se mantienen intactas las mecánicas de movimiento, colisiones, misiones, combate, inventario y progreso.
- Se conservan el HUD compacto de combate y los sprites direccionales de enemigos de 0.2.8.2.
- Inicio y título del navegador indican versión 0.2.8.4.
- Service Worker actualizado a caché `ghea-tactico-0284-world-sprite`.

## Prueba de esta versión

Recorrer trayectos largos en Arca/Afueras para evaluar: continuidad de la caminata, velocidad, cambio de dirección y posibles parpadeos. No extender todavía el sistema a enemigos hasta aprobar esta prueba.

## Regla de versiones

Cada ZIP nuevo debe actualizar README, versión visible en Inicio, título del navegador y clave de caché del service worker.

## Base estable

Las mecánicas siguen tomando como referencia 0.2.7.4. La rama 0.2.8.x se concentra en la capa visual.
