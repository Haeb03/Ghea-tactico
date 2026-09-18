# Ghea Táctico v0.2.8.39 — Anclajes y obstáculos

Base: **v0.2.8.38**.

## Exploración
- Se mantiene el tamaño aprobado del Guerrero: **180%**.
- Se cambia únicamente el anclaje: la coordenada lógica pasa a coincidir con el **centro de la peana**, usando la misma regla que ya funciona en combate.
- El cuerpo crece hacia arriba desde ese punto.

## Combate
- Miniaturas permanecen en **180%**.
- Peanas y HUD de Vida no se modifican.
- Se conserva la eliminación de los óvalos.

## Obstáculos: Exploración es la fuente de verdad
Se eliminan las escalas aproximadas de combate. El recorte táctico recibe las mismas dimensiones visuales utilizadas en Exploración:

- Árbol: **172 × 188 px**
- Roca grande: **132 × 112 px**
- Arbusto: **82 × 72 px**
- Tocón: **88 × 78 px**
- Tronco: **142 × 86 px**

El obstáculo táctico conserva la misma huella lógica que en Exploración y su PNG se ancla por el centro inferior, igual que en el mapa exterior.

También se conserva la posición correcta del personaje al regresar del combate.

Inicio y caché actualizados a **v0.2.8.39**.
