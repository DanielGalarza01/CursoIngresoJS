/* En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
 */
function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let flag = 1;
	let nacionalidadMasTemp;
	let masTemperatura = 0;
	let contMayorSolt = 0;
	let contMujSoltOViudas = 0;
	let contJovatosFiebre = 0;
	let contEdadMujCasadas = 0;
	let acumEdadMujCasadas = 0;
	let promEdMujCasadas;
	let seguir;

	do
	{
		nombre = prompt("Ingrese un nombre").toLowerCase();
		while( !(isNaN(nombre)) || nombre.length == 0 )
		{
			nombre = prompt("Error. Ingrese un nombre").toLowerCase();
		}

		nacionalidad = prompt("Ingrese la nacionalidad").toLowerCase();
		while( !(isNaN(nacionalidad)) || nacionalidad.length == 0 )
		{
			nacionalidad = prompt("Error. Ingrese la nacionalidad").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese su edad"));
		while(isNaN(edad)|| edad<1)
		{
			edad = parseInt(prompt("Error. Ingrese su edad"));
		}

		sexo = prompt("Ingrese su sexo: 'f' o 'm' ").toLowerCase();
		while( sexo != "f" && sexo !=  "m")
		{
			sexo = prompt("Error. Ingrese su sexo: 'f' o 'm' ").toLowerCase();
		}

		estadoCivil = prompt("Ingrese su estado civil: 'soltero' ; 'casado' ; 'viudo' ").toLowerCase();
		while( estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error. Ingrese su estado civil: 'soltero' ; 'casado' ; 'viudo' ").toLowerCase();
		}

		temperatura = parseFloat(prompt("Ingrese su temperatura"));
		while( temperatura < 35 || temperatura > 43)
		{
			temperatura = parseFloat(prompt("Error. Ingrese su temperatura"));
		}
		//a) la Nacionalidad de la persona con mas temperatura.
		if( flag || temperatura > masTemperatura)
		{
			masTemperatura = temperatura;
			nacionalidadMasTemp = nacionalidad;
			flag = 0;
		}

		//b) Cuantos mayores de edad( más de 17) estan solteros
		if( edad > 17 && estadoCivil == "soltero")
		{
			contMayorSolt++;
		}

		//c) La cantidad de Mujeres que hay solteras o viudas.
		if( sexo == "f" && estadoCivil != "casado")
		{
			contMujSoltOViudas++;
		}

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if( edad > 60 && temperatura > 38)
		{
			contJovatosFiebre++;
		}

		//e1) El promedio de edad entre las mujeres casadas.
		if( sexo == "f" && estadoCivil == "casado")
		{
			acumEdadMujCasadas += edad;
			contEdadMujCasadas++;
		}

		seguir = prompt("Desea ingresar más datos? s/n").toLowerCase();
	}while(seguir == "s");

	//e2) El promedio de edad entre las mujeres casadas.
	if(contEdadMujCasadas>0)
	{
		promEdMujCasadas = acumEdadMujCasadas / contEdadMujCasadas;
	}
	else{
		promEdMujCasadas = "No hay mujeres casadas.";
	}

	document.write("a) La Nacionalidad de la persona con mas temperatura es "+nacionalidadMasTemp+".<br>");
	document.write("b) Los mayores de edad( más de 17) estan solteros son "+contMayorSolt+".<br>");
	document.write("c) La cantidad de Mujeres que hay solteras o viudas es "+contMujSoltOViudas+".<br>");
	document.write("d) La cantidad de personas de la tercera edad( mas de 60 años), que tienen mas de 38 de temperatura es "+contJovatosFiebre+".<br>");
	document.write("e) El promedio de edad entre las mujeres casadas es "+promEdMujCasadas+".<br>");
}
