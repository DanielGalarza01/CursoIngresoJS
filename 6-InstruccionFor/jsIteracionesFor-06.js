function mostrar()
{
	let num= parseInt(prompt("Ingrese un número"));
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
			console.log("La cantidad de números pares es "+cont);
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