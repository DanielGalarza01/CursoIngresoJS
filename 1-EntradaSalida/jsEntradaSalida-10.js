/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

//definimos las variables.
	let importe;
	let descuento;
	let resultado;

//Asignamos valores a las variables.
	importe = parseInt(document.getElementById("txtIdImporte").value);
	descuento = importe * 0.25;
	resultado = importe - descuento;

//mostramos el resultado.
document.getElementById("txtIdResultado").value = resultado;

}
