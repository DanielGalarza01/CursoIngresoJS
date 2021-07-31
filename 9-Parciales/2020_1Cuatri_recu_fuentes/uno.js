/* Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */


function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let jabonMasCaro;
	let cantJmasCaro = 0;
	let fabJMasCaro;
	let tipoMasUnid;
	let promedio;
	let acumJabon = 0;
	let acumAlcohol = 0;
	let acumBarbijos = 0;
	let contJabon = 0;
	let contAlcohol = 0;
	let contBarbijos = 0;
	let flag=1;

	for(i=0 ; i<5 ; i++)
	{
		tipo = prompt("Ingrese el tipo de producto").toLowerCase();
		while( tipo != "barbijo" && tipo != "jabón" && tipo != "alcohol")
		{
			tipo = prompt("Error. Ingrese el tipo de producto").toLowerCase();
		}

		precio = parseInt(prompt("Ingrese el precio del producto"));
		while( precio < 100 || precio > 300)
		{
			precio = parseInt(prompt("Error. Ingrese el precio del producto"));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
		while( cantidad < 1 || cantidad > 1000)
		{
			cantidad = parseInt(prompt("Error. Ingrese la cantidad del producto"));
		}

		marca = prompt("Ingrese la marca del producto").toLowerCase();
		while( marca.length == 0 || !(isNaN(marca)))
		{
			marca = prompt("Error. Ingrese la marca del producto").toLowerCase();
		}

		fabricante = prompt("Ingrese el fabricante del producto").toLowerCase();
		while( fabricante.length == 0 || !(isNaN(fabricante)))
		{
			fabricante = prompt("Error. Ingrese el fabricante del producto").toLowerCase();
		}
		//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
		if(tipo == "jabón")
		{
			if(flag || precio>jabonMasCaro)
			{
				jabonMasCaro = precio;
				cantJmasCaro = cantidad;
		 		fabJMasCaro = fabricante;
				flag = 0;
			}
			acumJabon += cantidad;
			contJabon++;
		}
		else if(tipo == "barbijo")
		{
			acumBarbijos += cantidad;
			contBarbijos++;
		}
		else
		{
			acumAlcohol += cantidad;
			contAlcohol++;
		}

	}

	if(acumAlcohol>acumBarbijos && acumAlcohol>acumJabon)
		{
			promedio = acumAlcohol / contAlcohol;
			tipoMasUnid = "Alcohol";
		}
		else if(acumBarbijos>=acumAlcohol && acumBarbijos>acumJabon)
		{
			promedio = acumBarbijos / contBarbijos;
			tipoMasUnid = "Barbijos";
		}
		else
		{
			promedio = acumJabon / acumJabon;
			tipoMasUnid = "jabón";
		}
	document.write("a) Del más caro de los jabones, la cantidad de unidades es "+cantJmasCaro+" y el fabricante es "+fabJMasCaro+"<br>");
	document.write("b) Del tipo de producto con más unidades en total de la compra, el promedio por compra es "+promedio+"<br>");
	document.write("c) Se compraron en total "+acumBarbijos+" unidades de Barbijos.");
}
