/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	// ESTRATEGIA DE RESOLUCION.
	// 2.3.- Sumo los positivos/multiplico los negativos.
	//-------------------------------------------------------------------------------------------------------------------------------------
	// 3.- Mostramos los resultados.
	// 1.- Declaro las variables
	let respuesta;
	let numero;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 1;
	let flag = 0;
	
	// 2.- Generar un bucle del tipo mientras el usuario quiera( do while )
	do
	{
		// 2.1.- Pido un numero.
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero = parseInt(prompt("valor incorrecto. Ingrese un numero"));
		}
		// 2.2.- Analizo el signo. (generar un scope para los positivos y otro para los negativos).
		if(numero>0)
		{
			acumuladorPositivos += numero;
		}
		else
		{
			acumuladorNegativos *= numero;
			flag = 1;
		}
		respuesta = prompt("Desea continuar? s/n");
	}while(respuesta == 's');
	
	if(flag == 0)
	{
		acumuladorNegativos = 0;
	}
	document.getElementById("txtIdSuma").value = acumuladorPositivos;

	document.getElementById("txtIdProducto").value = acumuladorNegativos;

}//FIN DE LA FUNCIÓN