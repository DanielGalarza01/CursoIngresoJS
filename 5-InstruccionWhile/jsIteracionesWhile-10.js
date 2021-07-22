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
	let flagPos = 0;
	let flagNeg = 0;

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
			flagPos = 1;
		}
		else if(numero<0)
		{			
			acumuladorNegativos += numero;
			cantNeg++;
			flagNeg = 1;			
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
	if(flagPos = 1)
	promPos = acumuladorPositivos / cantPos;
	if(flagNeg = 1)
	promNeg = acumuladorNegativos / cantNeg;
	
	diferencia = cantPos-cantNeg;

	console.log("La suma de negativos es: "+acumuladorNegativos+".");
	console.log("La suma de positivos es: "+acumuladorPositivos+".");
	console.log("La cantidad de negativos es: "+cantNeg+".");
	console.log("La cantidad de positivos es: "+cantPos+".");
	console.log("La cantidad de ceros es "+cantCeros+".");
	console.log("La cantidad de números pares es: "+cantPar+".");
	console.log("El promedio de los positivos es: "+promPos+".");
	console.log("El promedio de los negativos es: "+promNeg+".");
	console.log("La diferencia entre negativos y positivos es: "+diferencia".");

}//FIN DE LA FUNCION.     