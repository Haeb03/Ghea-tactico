# Ghea Táctico v0.2.9.2 — HUD fijo

Primer bloque grande de la nueva etapa, construido sobre v0.2.8.40.

## Nuevo comienzo
- Personajes nuevos comienzan en Nivel 1, 0 EXP y 0 puntos.
- Guerrero: Iniciativa 5, PA 4, PM 3.
- Vida base 10.
- Armadura básica de cuero: +1 Vida.
- Botas básicas de cuero: +1 Vida.
- Vida inicial efectiva: 12.
- Sin arma: Ataque Normal 1 daño, 1 PA, adyacente.
- Espada de entrenamiento: +1 daño; Ataque Normal = 2.
- Ataque Normal limitado a 2 usos por turno.

## Progresión recuperada de v0.3.0.8
- Nv.1→2: 2 EXP.
- Desde Nv.2: 5 EXP y crecimiento ×1,6 redondeado.
- +1 Punto de Desarrollo por nivel.
- Niveles 4, 8, 12, 16... entregan +2 en lugar de +1.
- Se mantiene el árbol de Desarrollo existente como base temporal.

## Arca reprogramada
Arca pasa a ser un hub de 1000×1000 con:
- Academia Arca
- Gran Biblioteca
- Herrería
- Carpintería
- Textiles y Cuero
- Joyería
- Tienda General
- Taberna
- Posada
- Plaza Central
- Puerta Oeste

Los edificios usan el nuevo sistema de interiores: al entrar se abre una pantalla 2D independiente con identidad visual y menú de acciones. Es un motor común para todos los establecimientos.

## Tutorial
Se conecta el nuevo personaje con el comienzo del tutorial:
Maestro → Espada de entrenamiento → equipar → Muñeco de Paja → regreso al Maestro.

La siguiente parte del tutorial conservará la secuencia de v0.3.0.8: Desarrollo, Golpe Fuerte, Bloqueo, Descanso, objetos y traslado de cuerpos.

## Campaña
- La misión principal de bandidos deja de ser la salida de Arca.
- La Puerta Oeste queda como salida de la campaña nueva.
- Tras completar el tutorial, el siguiente objetivo será la misión de la carreta en Zona Oeste.
- El contenido de la carreta se implementará sobre el mapa Oeste actual.

## Conservado
Todo el trabajo visual/técnico de v0.2.8.40 en Zona Oeste y combate se mantiene.


## Correcciones v0.2.9.1
- Exploración móvil contenida en la pantalla: ficha del personaje y barra inferior de acciones permanecen visibles.
- Corregida la aproximación a edificios: el personaje camina a la puerta exterior y ya no intenta llegar al centro bloqueado del edificio.
- Academia accesible para iniciar el tutorial del Maestro.
- Habilidades corregidas: un personaje nuevo no muestra ni puede equipar habilidades todavía no aprendidas.
- Desarrollo reemplazado por la estructura final de v0.3.0.8: selector Ofensiva/Defensa y ramas con Golpe Fuerte/Bloqueo, Fuerza/Vitalidad/Iniciativa/Oportunidad/Furia/Robustez/Guardia según requisitos.

## Corrección crítica v0.2.9.2
- La barra de acciones de exploración queda fijada al borde inferior del viewport.
- Inventario, Habilidades, Desarrollo, Personajes y Descansar permanecen accesibles durante la exploración.
- El mapa ocupa únicamente el espacio restante y hace scroll internamente.
- La pantalla de exploración ya no puede empujar las acciones fuera del área visible.
- Se contiene el texto de actores del mapa para evitar desbordes laterales como el nombre del Muñeco.
