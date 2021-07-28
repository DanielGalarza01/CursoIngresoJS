/* al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
 */

function mostrar()
{
	let num;
	let cont = 0;

	num = parseInt(prompt("Ingrese un número"));

	while(isNaN(num)||num<=0)
	{
		num = parseInt(prompt("Error, ingrese un número"));
	}
	for(let i=1 ; i<=num ; i++)
	{
		if(num%i==0)
		{
			console.log(i+" es divisor de "+num);
			cont++;
		}
	}
	console.log("La cantidad de divisores que tiene "+num+" es "+cont);










/* 	let num;
	let cont=0;
	
	num = parseInt(prompt("Ingrese un número"));
	

	while(isNaN(num)||num<0)
	{
		num=parseInt(prompt("valor invalido, ingrese un número"));
	}
	
	for(let i=1; i<=num ; i++)
	{
		if(num%i!=0)
		{
			continue;
		}
		console.log(i);
		cont++
	}
	console.log("La cantidad de divisores es "+cont); */
}//FIN DE LA FUNCIÓN