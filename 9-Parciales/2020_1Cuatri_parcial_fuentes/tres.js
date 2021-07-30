/* En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar()
{
	let nombre;
	let edad ;
	let sexo;
	let estado;
	let temperatura;
	let nombreMaxTemp;
	let maxTemp;
	let contJovatosViudos= 0;
	let contHombresfelices= 0;
	let contJovatosFiebre= 0;
	let contHSolteros= 0;
	let acumEdadHSoltros= 0;
	let flag=1;
	let seguir;
	let promedio = 0;


	do
	{
		nombre= prompt("Ingrese un nombre").toLowerCase();
			while(nombre.length ==0)
			{
				nombre= prompt("Error. Ingrese un nombre").toLowerCase();
			}

		sexo= prompt("Ingrese su sexo: m/f").toLowerCase();
			while(sexo!= "F" && sexo != "m")
			{
				seguir= prompt("Desea seguir cargando datos? s/n");
			}
		temperatura = parseFloat(prompt("Ingrese temperatura (30/45): "));
             while( !(temperatura >= 30 && temperatura <= 45)  )
				{
				temperatura = parseFloat(prompt("Error. Ingrese temperatura (30/45): "));
				}

		edad = parseInt(prompt("Ingrese edad max 1000: "));
			while( isNaN(edad) || edad < 1 )
				{
				edad = parseInt(prompt("Cantidad invalida. Reingrese edad: "));
				}	
				
	seguir= prompt("")			
	}while(seguir== "s");
}
