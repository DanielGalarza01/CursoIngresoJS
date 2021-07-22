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
	let promPos;
	let promNeg;
	let diferencia;
	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		
		if(numero>0)
		{
			if(numero%2==0)
			{
				cantPar++;
			}
			acumuladorPositivos += numero;
			cantPos++;
		}
		else if(numero<0)
		{
			if(numero%2==0)
			{
				cantPar++;
			}
			acumuladorNegativos += numero;
			cantNeg++			
		}
		else
		{
			cantCeros++;
		}
		respuesta = prompt("Desea continuar? s/n");
	}while(respuesta == 's');

	promPos = acumuladorPositivos / cantPos;
	promNeg = acumuladorNegativos / cantNeg;
	diferencia = acumuladorPositivos-acumuladorNegativos;

	alert("La suma de negativos es: "+acumuladorNegativos+". La suma de positivos es: "+acumuladorPositivos+". La cantidad de negativos es: "+cantNeg+". La cantidad de positivos es: "+cantPos+". a cantidad de ceros es "+cantCeros+". La cantidad de números pares es: "+cantPar+". El promedio de los positivos es: "+promPos+". El promedio de los negativos es: "+promNeg+". Y la diferencia entre negativos y positivos es: "+diferencia);

}//FIN DE LA      