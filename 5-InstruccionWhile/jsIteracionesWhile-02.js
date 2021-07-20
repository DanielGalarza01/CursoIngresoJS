/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	let control = 10;
	let mensaje = "";

	while(control>0)
	{
		
		mensaje = mensaje + control +" ";

		control--;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN