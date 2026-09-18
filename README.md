# Ghea Táctico v0.2.8.35 — Peana y Vida alineadas

Base: **v0.2.8.34**.

## Objetivo de esta actualización

Corregir exclusivamente la representación visual de las unidades en combate sin tocar la lógica táctica.

## Corregido

- **Peana centrada:** la miniatura sigue perteneciendo a la misma casilla lógica, pero ahora el centro de su peana se ancla al centro de esa casilla.
- Se elimina el `translateY(-50%)` usado en v0.2.8.34, que desplazaba visualmente toda la miniatura.
- El mismo anclaje se usa durante el **Despliegue inicial** y durante el combate.
- **Vida:** `14/14` y la barra se colocan por encima de la cabeza en vez de atravesar la cara.
- Se conserva la eliminación de los óvalos de obstáculos conseguida en v0.2.8.34.
- Se conserva la corrección de posición del Aventurero al regresar del combate conseguida en v0.2.8.33.
- Inicio, título, CSS/JS y Service Worker pasan a **v0.2.8.35** para comprobar la carga.

## No se modifica

- Casilla lógica de las unidades.
- Movimiento, PM y PA.
- Alcances.
- Despliegue permitido.
- Colisiones y pathfinding.
- Huellas lógicas de obstáculos.
- IA y reglas de combate.

## Pendiente

Una vez validado este ajuste visual:
- revisar los demás detalles pendientes;
- integrar el tutorial previo a Bandidos;
- incorporar los nuevos árboles de Desarrollo.
