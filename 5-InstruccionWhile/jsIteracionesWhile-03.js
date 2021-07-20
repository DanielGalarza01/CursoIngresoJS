/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese la clave.");

	while(clave!=utn750)//cuando el dato sea invalido hacce true la condición.
	{
		clave = prompt("Clave invalida, reingrese clave");
	}
	alert("Clave correcta");
}//FIN DE LA FUNCIÓN
