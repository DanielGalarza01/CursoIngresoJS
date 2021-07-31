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
	let acumEdadHSolteros= 0;
	let flag=1;
	let seguir;
	let promedio; 


	do
	{
		nombre= prompt("Ingrese un nombre").toLowerCase();
			while(nombre.length ==0 || !(isNaN(nombre)))
			{
				nombre= prompt("Error. Ingrese un nombre").toLowerCase();
			}

		edad = parseInt(prompt("Ingrese edad : "));
			while( isNaN(edad) || edad < 1 )
				{
				edad = parseInt(prompt("Cantidad invalida. Reingrese edad: "));
				}	
		
		sexo= prompt("Ingrese su sexo: m/f").toLowerCase();
			while(sexo!= "f" && sexo != "m")
				{
					sexo= prompt("Error. Ingrese su sexo: m/f").toLowerCase();
				}

		estado = prompt("Ingrese su estado civil: (soltero, casado o viudo)").toLowerCase();
			while( estado!= "soltero" && estado!= "casado" && estado!= "viudo")
				{
					estado = prompt("Error. Ingrese su estado civil: (soltero, casado o viudo)").toLowerCase();
				}

		temperatura = parseFloat(prompt("Ingrese temperatura (30/45): "));
			while( !(temperatura >= 30 && temperatura <= 45)  )
				{
					temperatura = parseFloat(prompt("Error. Ingrese temperatura (30/45): "));
				}
		
		if(flag || temperatura > maxTemp)
		{
			maxTemp= temperatura;
			nombreMaxTemp = nombre;
			flag=0;
		}
		if( edad>=18 && estado == "viudo" )
		{
			contJovatosViudos++;
		}
		if( sexo == "m" )
		{
			if(estado!= "casado")
			{
				contHombresfelices++;
			}
		}
		if( edad > 60 && temperatura > 38)
		{
			contJovatosFiebre++;
		}
		if( estado == "soltero")
		{
			acumEdadHSolteros+= edad;
			contHSolteros++;
		}
		
	seguir= prompt("Desea seguir cargando datos? : s/n");			
	}while(seguir == "s");


	promedio = acumEdadHSolteros / contHSolteros;

document.write("a) El nombre de la persona con mas temperatura es "+nombreMaxTemp+"<br>");
document.write("b) Los mayores de edad que estan viudos son "+ contJovatosViudos +"<br>");
document.write("c) La cantidad de hombres que hay solteros o viudos es "+contHombresfelices+"<br>");
document.write("d) La cantidad de personas de la tercera edad( mas de 60 años) que tienen mas de 38 de temperatura es "+contJovatosFiebre+"<br>");
document.write("e) El promedio de edad entre los hombres solteros es "+promedio);
}