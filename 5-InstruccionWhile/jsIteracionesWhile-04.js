/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseInt(prompt("Ingrese un número entre 0 y 9"));
	
	while(!(numero>=0 && numero<10))
	{
		numero = parseInt(prompt("El numero no cumple con la consigna, ingrese otro numero"));
	}
	document.getElementById("txtIdNumero").value = numero;
}//FIN DE LA FUNCIÓN