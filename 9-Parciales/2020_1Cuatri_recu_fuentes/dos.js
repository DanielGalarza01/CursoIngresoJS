function mostrar()
{
  temperatura = parseFloat(prompt("Ingrese su temperatura"));
	while( isNaN(temperatura) || temperatura<35 || temperatura > 45)
	{
		temperatura = parseFloat(prompt("Error. Ingrese su temperatura"));
	}
}
