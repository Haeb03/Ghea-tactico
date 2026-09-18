# Ghea Táctico v0.2.8.34 — Combate alineado

Base: **v0.2.8.33**.

## Correcciones de esta versión
- Se conserva la corrección de v0.2.8.33 que mantiene al Aventurero en su posición al regresar del combate.
- Miniaturas de combate: se recupera el anclaje por **centro de la peana**, usando la misma referencia visual que en Exploración. La casilla lógica no cambia.
- Vida: número y barra permanecen ligados a la casilla de la unidad y quedan visualmente junto a la miniatura.
- Obstáculos: se conserva exactamente la huella lógica usada en Exploración y en el recorte táctico 10×10.
- En combate sólo se muestra el PNG del obstáculo. Se anulan también los pseudo-elementos `::before` y `::after` del overlay visual, que no estaban cubiertos por la limpieza anterior y podían seguir mostrando círculos/óvalos.
- Las escalas de árbol, roca, arbusto, tocón y tronco mantienen la equivalencia física calculada desde las medidas usadas en Exploración.
- Inicio, título, referencias de caché y Service Worker actualizados a v0.2.8.34.

## Sin cambios de reglas
No se modifican colisiones, pathfinding, casillas ocupadas, PM, PA, IA, despliegue ni reglas de combate.

## Pendiente
- Tutorial previo a Bandidos.
- Nuevos árboles de Desarrollo.
