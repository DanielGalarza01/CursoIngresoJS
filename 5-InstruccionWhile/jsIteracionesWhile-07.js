/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{

	let contador;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta='s';

	do
	{
		acumulador += parseInt(prompt("ingrese un numero"));
		respuesta = prompt("Desea continuar? s/n");
		contador++;
	}while(respuesta == 's');


	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = acumulador/contador;


/*  let contador;
	let acumulador;
	let respuesta;
	contador=0;
	acumulador=0;
	respuesta='s';

	do
	{
		acumulador += parseInt(prompt("ingrese un numero"));
		respuesta = prompt("Desea continuar? s/n");
		contador++;
	}while(respuesta == 's');


	document.getElementById("txtIdSuma").value = acumulador;

	document.getElementById("txtIdPromedio").value = acumulador/contador;*/

}//FIN DE LA FUNCIÓN