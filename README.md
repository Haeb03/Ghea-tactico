# Ghea Táctico v0.3.0.0 — Reestructuración funcional

Primera prueba de la nueva estructura de Ghea Táctico, construida sobre el respaldo v0.2.8.32.

## Objetivo de esta versión
- Probar funciones antes de crear texturas y escenarios definitivos.
- Nuevo flujo: título → menú → Nueva partida / Continuar partida.
- Creación simplificada: Nombre (máx. 16), Raza y Clase.
- Máximo 3 aventureros.
- Primer mapa provisional: Arca ~100×100 m, sin texturas.
- Movimiento libre por toque y bloqueos provisionales de edificios.
- Plaza central, Academia, Maestro y Muñeco de Paja como marcadores funcionales.
- Objetivo inicial: hablar con el Maestro.
- El Maestro entrega Espada de madera y habilita la primera prueba.
- Primer combate tutorial provisional contra Muñeco de Paja de 4 Vida.
- Guerrero: Vida base 10 + Ropa común +1 + Botas comunes +1 = 12 Vida inicial; 4 PA y 3 PM.
- Ataque Normal: 1 daño, 1 PA, máximo 2 usos por turno.
- Victoria: +1 EXP. Curva inicial prevista: 2 EXP para nivel 2; luego 5 y crecimiento ×1,6.
- Ficha circular del Guerrero usada como marcador temporal.

## Todavía no implementado
- Texturas definitivas de Arca.
- Movimiento táctico seleccionando casillas dentro del combate tutorial.
- Entrega de misión y subida completa a Nivel 2.
- Árbol nuevo: Golpe Fuerte 1/1 y Bloqueo 1/1.
- Resto de pruebas del Maestro (habilidad, defensa, descanso, poción y cadáver).
- Opciones.

## Respaldo
`app-legacy-0.2.8.32.js` conserva el JavaScript anterior dentro del paquete para consulta durante la migración. No se carga en la aplicación.
