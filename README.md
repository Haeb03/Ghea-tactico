# Ghea Táctico v0.2.8.38 — Exploración centrada

Base: **v0.2.8.37**.

## Causa encontrada
El `worldHero` ya recibe `left/top` como coordenada lógica del personaje y su contenedor de 64×64 ya se centra mediante `translate(-50%,-50%)`.

En v0.2.8.37 se volvió a desplazar el PNG internamente con `left:50%` y `bottom:50%`. Eso aplicaba una segunda referencia visual y por eso el cambio no coincidía con la casilla real.

## Corrección
- El contenedor 64×64 del Guerrero es ahora la única referencia de posición.
- Su centro coincide con la coordenada lógica / centro de casilla.
- El PNG se centra dentro del contenedor sin offsets adicionales.
- Guerrero de Exploración aumentado a 180%.
- Combate permanece en 180%, sin cambios de peana ni HUD.
- Se conservan óvalos eliminados y retorno correcto tras combate.

Inicio y caché actualizados a **v0.2.8.38**.
