/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let suma;

//levantos los datos de las cajas de textos.
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

//realio la operacion	
	suma = numero1 + numero2;
	

	alert("La suma es "+ suma);
//alert(`La suma es ${suma}`);

}

