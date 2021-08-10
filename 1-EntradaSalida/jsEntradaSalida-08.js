/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resto;

//levantos los datos de las cajas de textos.
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	dividendo = parseInt(dividendo);

	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

//realio la operacion	
	resto = dividendo % divisor;
	
//muestro el resultado
	alert("El resto es "+ resto);
}