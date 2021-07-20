/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	
	let numero;
	let acumulador;
	let promedio;
	let contador;

	numero = parseInt(prompt("Ingrese un numero"));
	acumulador = 0;
	contador = 0;

	while(numero != "0")
	{
		acumulador += numero;
		numero = parseInt(prompt("Ingrese un nuevo numero o ingrese '0' si desea terminar"));
		contador++;
	}

	document.getElementById("txtIdSuma").value = acumulador;
	promedio = acumulador / contador;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN