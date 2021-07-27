/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let respuesta;
	let numero;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;
	let cantPos = 0;
	let cantNeg = 0;
	let cantCeros = 0;
	let cantPar = 0;
	let promPos = 0;
	let promNeg = 0;
	let diferencia;

	do
	{
		numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero))
        {
            numero = parseInt(prompt("valor invalido, ingrese otro número"));
        }
		
		if(numero>0)
		{			
			acumuladorPositivos += numero;
			cantPos++;
		}
		else if(numero<0)
		{			
			acumuladorNegativos += numero;
			cantNeg++;			
		}
		else
		{
			cantCeros++;
		}
		if(numero%2==0)
			{
				cantPar++;
			}
		respuesta = prompt("Desea continuar? s/n").toLowerCase();
	}while(respuesta == 's');


	if(cantPos > 0)
	{
		promPos = acumuladorPositivos / cantPos;
	}
	if(cantNeg > 0)
	{
		promNeg = acumuladorNegativos / cantNeg;
	}
	diferencia = cantPos-cantNeg;

	alert(" 1- La suma de negativos es: "+acumuladorNegativos+"."+
	"\n 2.- La suma de positivos es: "+acumuladorPositivos+"."+
	"\n 3.- La cantidad de negativos es: "+cantNeg+"."+
	"\n 4.- La cantidad de positivos es: "+cantPos+"."+
	"\n 5.- La cantidad de ceros es "+cantCeros+"."+
	"\n 6.- La cantidad de números pares es: "+cantPar+"."+
	"\n 7.- El promedio de los positivos es: "+promPos+"."+
	"\n 8.- El promedio de los negativos es: "+promNeg+"."+
	"\n 9.- La diferencia entre positivos y negativos es: "+diferencia+".");

}//FIN DE LA FUNCION.     