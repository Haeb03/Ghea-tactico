# Ghea Táctico v0.2.8.40 — Escala de entorno

Base: **v0.2.8.39**.

## Exploración
- El árbol aumenta de **172×188 px** a **224×244 px**.
- Conserva exactamente la misma huella lógica y el mismo anclaje inferior.
- La transparencia de Exploración continúa funcionando cuando el personaje queda detrás.

## Combate
Se reducen los obstáculos a los valores acordados respecto de la miniatura de combate:

- Árbol: **120×140 px**
- Roca grande: **112×95 px**
- Arbusto: **66×58 px**
- Tocón: **75×66 px**
- Tronco: **121×73 px**

Las escalas antiguas quedan anuladas: estas dimensiones son las que usa directamente el overlay táctico.

## Transparencia en combate
- Los árboles detectan si su PNG se superpone con una miniatura situada detrás.
- En ese caso pasan automáticamente a **50% de opacidad**.
- Cuando dejan de tapar la miniatura recuperan su opacidad normal.

## Se conserva
- Miniaturas de combate en **180%**.
- Tamaño del Guerrero de Exploración en **180%**.
- Anclaje por centro de peana.
- HUD de Vida.
- Eliminación de óvalos.
- Posición correcta al regresar del combate.

Inicio, referencias de caché y Service Worker actualizados a **v0.2.8.40**.
