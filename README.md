# Ghea Táctico v0.3.0.5 — reinicio de la reestructuración

Base real: **v0.2.8.32**. Se descarta por completo la maqueta v0.3.0.0.

## Objetivo de esta prueba
- Conservar la interfaz y los sistemas funcionales de v0.2.8.32.
- Nuevo menú: Nueva partida, Continuar, Opciones (pendiente) y Salir.
- Creación reducida a Nombre, Raza y Clase; máximo 3 Aventureros.
- Guardado nuevo independiente de la rama 0.2.
- Arca como único mapa de exploración actual, escala conceptual aproximada 0–100 m.
- Movimiento libre continuo, sin cuadrícula de exploración.
- Escenario provisional sin texturas.
- Ficha circular del Guerrero.
- Inicio del tutorial: hablar con Maestro → recibir Espada de madera → equiparla desde el Inventario existente → combatir contra Muñeco de Paja.
- Combate reutiliza el motor táctico de v0.2.8.32, sin texturas de escenario.
- Guerrero: Vida base 10 + Ropa común +1 + Botas comunes +1 = 12 al inicio; PA 4; PM 3.
- Espada de madera: +1 Daño.
- Ataque Normal: 1 PA, máximo 2 usos por turno.
- Muñeco de Paja: Vida 4; Ataque Normal 1; PA 2; PM 3.
- Nueva EXP: 1→2 = 2; 2→3 = 5; luego crecimiento ×1,6 con redondeo.

La siguiente etapa ampliará el tutorial y el nuevo árbol del Guerrero una vez validado este flujo.


## v0.3.0.3
- Tutorial ampliado hasta Nivel 4: Golpe Fuerte, Bloqueo, Descanso, Poción y traslado de cadáver.
- Muñeco de Paja: 6 Vida.
- Exploración ajustada a una sola pantalla móvil, sin scroll general.
- Se conserva el motor táctico de v0.2.8.32.

## v0.3.0.3 — limpieza del rediseño
- Se puede eliminar un aventurero desde Continuar partida, con confirmación irreversible.
- Desarrollo ya no muestra los árboles heredados: quedan Golpe Fuerte 1/1 y Bloqueo 1/1 como inicio del nuevo árbol.
- Habilidades elimina Corte y cualquier activa heredada de la versión anterior.
- Inventario compactado para pantallas verticales sin alterar equipar/desequipar.
- Tutorial de cadáveres ya no finaliza al pasar turno: sólo termina al depositar el cuerpo en la zona objetivo.
- Cadáver y zona objetivo se acercaron para que la prueba sea más clara, manteniendo la posibilidad de requerir varios turnos.


## v0.3.0.4
- Destino del cadáver resaltado permanentemente con etiqueta DESTINO.
- Inventario reorganizado para pantalla móvil sin reducir la figura del Guerrero.
- Desarrollo vuelve a selector Ofensiva / Defensa y abre una rama por vez.
- Se mantienen únicamente Golpe Fuerte 1/1 y Bloqueo 1/1 como nodos iniciales del nuevo árbol.


## v0.3.0.5
- Nueva referencia visual de Arca: HUD compacto, Zona/Objetivo, mapa protagonista y barra inferior siempre visible.
- Guerrero y Muñeco usan fichas circulares desde `assets-fichas/`.
- Rutas: `assets-fichas/ficha-guerrero.png` y `assets-fichas/ficha-muneco.png`.
- Se elimina el `alert()` del navegador al subir de nivel y se reemplaza por un aviso integrado al juego.
