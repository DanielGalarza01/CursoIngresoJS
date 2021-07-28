/* al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */

function mostrar()
{
	let cont = 0;
	let num;
	num = parseInt(prompt("Ingrese un número"));

	while(isNaN(num))
	{
		num = parseInt(prompt("ERROR, Ingrese un número"));
	}

	for(let i=1 ; i<=num ; i++)
	{
		if(i%2)
		{
			continue;
		}
		else
		{
			console.log("El número es "+i);
			cont++
		}
	}
	console.log("La cantidad de números pares es "+cont);





















	/* let num= parseInt(prompt("Ingrese un número"));
	let cont = 0;

	while(isNaN(num)||num<0)
	{
		num=parseInt(prompt("valor invalido, ingrese un número"));
	}
	
	for(let i=1; i<=num ; i++)
	{
		if(!(i%2==0))
		{
			continue;
		}
		console.log(i);
		cont++;
	}
			console.log("La cantidad de números pares es "+cont); */
	/*for(let i=1; i<=num ; i++)
	{
		if(i%2==0)
		{
			console.log(i);
			cont++;
		}
	}
			console.log("La cantidad de números pares es "+cont);*/
}