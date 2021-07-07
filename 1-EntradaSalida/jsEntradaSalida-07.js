/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	let numero1;
	let numero2;
	let Resta;

//levantos los datos de las cajas de textos.
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

//realio la operacion	
	resta = numero1 - numero2;
	

	alert("La resta es "+ resta);
	
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let multiplicar;

//levantos los datos de las cajas de textos.
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

//realio la operacion	
	multiplicar = numero1 * numero2;
	

	alert("La multiplicaciòn es "+ multiplicar);
	
}

function dividir()
{
	let numero1;
	let numero2;
	let dividir;

//levantos los datos de las cajas de textos.
	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero1 = parseInt(numero1);

	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

//realio la operacion	
	dividir = numero1 / numero2;
	

	alert("La division es "+ dividir);
}

