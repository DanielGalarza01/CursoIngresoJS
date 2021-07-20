/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("Ingrese 'm' para masculino o 'f' para femenino");

	while(!(sexo == "m" || sexo == "f"))
	{
		sexo = prompt("El valor ingresado no es correcto, Intentelo nuevamente.");
	}
	document.getElementById("txtIdSexo").value = sexo;

}//FIN DE LA FUNCIÓN