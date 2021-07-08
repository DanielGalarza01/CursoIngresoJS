function mostrar()
{
		//tomo la edad  
		let edad;

		edad = parseInt(document.getElementById("txtIdEdad").value);
		
		if(!(edad >=13 && edad <=17))
		{
			alert("No es adolescente");
		}
		/*if(edad<=17)
		{
			if( edad>=13)
				{
					alert("Es adolescente")
				}
			
		}*/

}//FIN DE LA FUNCIÓN