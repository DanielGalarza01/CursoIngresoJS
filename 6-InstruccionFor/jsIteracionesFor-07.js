function mostrar()
{

	let num;
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
	console.log("La cantidad de divisores es "+cont);
}//FIN DE LA FUNCIÓN