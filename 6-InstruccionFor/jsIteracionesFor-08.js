
//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

function mostrar()
{
	let numero;
	cont=0;

	numero = parseInt(prompt("Ingrese un número"));

	while(isNaN(numero)||numero<0)
	{
		numero = parseInt(prompt("Error, ingrese un número"));
	}
	for(let i=1 ; i<=numero ; i++)
	{
		if(numero%i)
		{
			continue;
		}
		
			cont++;
		
	}
	if(cont==2)
	{
		alert("El numero "+numero+" es primo");
	}
	/* let num;
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
		
		cont++
	}
	if(cont==2)
	{
		alert("El número ingresado es primo");
	} */
	
}//FIN DE LA FUNCIÓN