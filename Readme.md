# kata-bowling

Enunciado Kata Bowling:

- 10 turnos:
	+ 1 Turno = 2 intentos.

- Puntuaciones:
	+ Strike
		* Derribar todos los bolos en el primer intento
		* Sumas 10 puntos + bolos derribados en los proximos lanzamientos

	+ Spare
		* Derribar todos los bolos en 2 intentos.
		* Sumas 10 puntos + bolos derribados en el siguiente tiro.

	+ Open Frame
		* No derribar todos los bolos en el turno
		* Sumas bolos derribados en el turno.

	+ Décimo turno
		* Jugador con spare o strike tiene lanzamientos adicionales
		* Máximo 3 tiros en el turno

- Cálculo de las puntuaciones en los turnos
	+ Cuando se lanza un strike o un spare la puntuación queda pendiente hasta uno o dos turnos después

- Para esta kata, se completa el marcador cuando se acaba la partida. 

===========================
Casos de prueba:
- 20 lanzamientos: 20 fallos = 0 puntos
- 20 lanzamientos: 10 pares de 1 = 20 puntos
- 20 lanzamientos: 1 spare, 1 acierto, 17 fallos = 10 + 5 + 5 = 20 puntos
- 19 lanzamientos: 1 strike, 2 aciertos (2 bolos y 3 bolos), 16 fallos = 10 + 2 + 3+ 2 + 3 = 20
- 12 lanzamientos: 12 strikes = 10 turnos * 30 puntos = 300 puntos
- 21 lanzamientos: 10 pares de 5 y spare con un 5 final = 10 turnos * 15 puntos = 150 puntos
- 21 lanzamientos: 10 pares de 8  y spare con un 8 final = 10 turnos * 18 puntos = 180 puntos