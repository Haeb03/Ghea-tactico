# Ghea Táctico 0.2.4

Versión de pulido del prototipo móvil.

Cambios principales:
- Movimiento de exploración animado con pathfinding y límites seguros.
- Seguimiento de misión y misión inicial repetible para pruebas.
- Curva de EXP +60% redondeada: 10, 16, 26, 42, 67, 107…
- Subir de nivel no cura Vida; otorga 2 puntos de Desarrollo por nivel.
- Barra de combate móvil de dos filas con ficha informativa de cada acción.
- Escudo no persiste fuera del combate.
- Inventario con figura central y slots alrededor.
- Requisitos visibles del árbol; Daño base 3/3 abre la siguiente etapa ofensiva y Vitalidad 3/3 la defensiva.
- Ajustes de marcadores, colores y altura visual.

El guardado local de 0.2 se conserva.


## 0.2.4
- Movimiento animado casilla por casilla para Aventurero y enemigos.
- Barras compactas de Vida sobre las unidades.
- Indicador direccional de misión.
- Interacción con equipo: ficha, desequipar y selección directa de slot compatible.
- Espada básica y Daga oxidada pueden ir en mano principal o secundaria.
- Furia visible en combate y aplicada al cálculo de daño.

## 0.2.4
- Indicadores sobre las fichas: Herida, Veneno y Furia activa.
- IA enemiga usa y anuncia habilidades especiales durante su turno.
- Árbol de Defensa ramificado: Vitalidad abre nivel 2; Guardia queda debajo de Robustez y requiere Robustez 2/2 + 6 puntos totales en Defensa.


## 0.2.5
- Fase de despliegue inicial: elegí una casilla aliada y confirmá antes de iniciar turnos/temporizador.
- Mochila: opción Descartar con confirmación; no entrega oro.
- Versión visible corregida a 0.2.5.
- Se conserva la IA enemiga de 0.2.4, ya confirmada en playtest usando habilidades.

## 0.2.7
- Despliegue inicial más limitado y estratégico: combina posiciones separadas con pequeños grupos contiguos.
- Los combatientes derrotados dejan cadáver y continúan bloqueando su casilla.
- Acción universal **Mover cuerpo**: 1 PA, mueve un cadáver adyacente una casilla ortogonal libre, sin gastar PM.
- Feedback visual básico de combate: impacto cuerpo a cuerpo, daño flotante, proyectiles de ballesta, efecto de Granada Tóxica y Escudo de Bloqueo.
- El Bandido con Ballesta aumenta a alcance 3 en Ataque Normal, Tiro Certero y Tiro Ralentizador.
- La IA enemiga conserva su lógica de 0.2.5; solo se adapta el alcance del Ballestero.

## 0.2.7 — Arca viva
- Nueva zona Camino de la Puerta Oeste con Guardia y dos manadas patrullando (3 jabalíes cada una).
- Herrería, Joyería y Tienda de telas/cuero visitables.
- Cadena secundaria no repetible: escudo → caza → collar → armadura.
- Crafting consume materiales y 3 de oro. Tras completar la cadena, las recetas quedan desbloqueadas.
- Comercios permiten vender objetos; por ahora no tienen catálogo de compra.
- Collar de Jabalí: +1 Escudo al inicio de cada turno, venta 15.
- Armadura de cuero de jabalí: +3 Vida máxima, venta 10.
