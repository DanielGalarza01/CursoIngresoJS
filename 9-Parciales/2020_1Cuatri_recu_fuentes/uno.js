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
	let fabricanteMaxJ;
	let cantMaxJ;
	let promedio;
	let acumuladorJ;
	let acumuladorA;
	let acumuladorB;
	let contJ;
	let contA;
	let contB;
	let flag = 1;
	
	for(let i=0 ; i<5 ; i++)
	{
		tipo = prompt("Ingrese un tipo (barbijo/alcohol/jabón)").toLowerCase();
		while(tipo!="alcohol"&&tipo!="barbijo"&&tipo!="jabón")
		{
				tipo= prompt("Valor invalido. Ingrese un tipo (barbijo/alcohol/jabón)").toLowerCase();
		}

		precio = parseInt(prompt("Ingrese el precio"));
		while(precio<100 || precio>300)
		{
			precio = parseInt(prompt("Valor invalido. Ingrese el precio"));
		}

		cantidad = parseInt(prompt("Ingrese la cantidad"));
		while(cantidad<=0 || cantidad>1000)
		{
			cantidad = parseInt(prompt("Valor invalido. Ingrese la cantidad"));
		}

		marca = prompt("Ingrese la marca").toLocaleLowerCase();
		while(marca.length==0)
		{
			marca = prompt("Por favor ingrese la marca").toLocaleLowerCase();
		}

		fabricante = prompt("Ingrese el fabricante").toLowerCase();
		while(fabricante.length==0)
		{
			fabricante = prompt("Por favor ingrese el fabricante").toLowerCase();
		}

		switch(tipo)
		{
			case jabon:
				if( flag || cantMaxJ < cantidad )
				{
					cantMaxJ = cantidad;
					fabricanteMaxJ = fabricante
					flag = 0;
				}
				acumuladorJ += cantidad;
				contJ++;
		}
		

	}
}
