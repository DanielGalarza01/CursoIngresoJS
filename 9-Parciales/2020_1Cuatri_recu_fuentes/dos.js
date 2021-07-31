/* Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro. */

function mostrar()
{
	let tipo;
	let cantidadBolsas;
	let precioBolsa;
	let descuento;
	let importeparcial;
	let importeBruto=0;
	let importeNeto;
	let acumBolsasCal=0;
	let acumBolsasArena=0;
	let acumBolsasCemento=0;
	let acumBolsas=0;
	let tipoMasCantBolsas=0;
	let precioMasCaro;
	let tipoMasCaro;
	let flag = 1;
	let seguir;

	do
	{
	tipo= prompt("Ingrese un producto: arena/cal/cemento").toLowerCase();
	while( tipo!="arena" && tipo!= "cal" && tipo!= "cemento")
	{
		tipo= prompt("Error. Ingrese un producto: arena/cal/cemento").toLowerCase();
	}

	cantidadBolsas=parseInt(prompt("Ingrese la cantidad de bolsas"));
	while( isNaN(cantidadBolsas)|| cantidadBolsas<1)
	{
		cantidadBolsas=parseInt(prompt("Error. Ingrese la cantidad de bolsas"));
	}

	precioBolsa= parseFloat(prompt("Ingrese el precio por bolsa"));
	while(isNaN(precioBolsa) || precioBolsa<1)
	{
		precioBolsa= parseFloat(prompt("Error. Ingrese el precio por bolsa"));
	}

	
	//a) El importe total a pagar , bruto sin descuento y...
	importeparcial=precioBolsa*cantidadBolsas;
	importeBruto+=importeparcial;
	acumBolsas+=cantidadBolsas;

	//d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
	switch(tipo)
	{
		case "arena":
			acumBolsasArena+=cantidadBolsas;
			break;
		case "cemento":
			acumBolsasCemento+=cantidadBolsas;
			break;
		case "cal":
			acumBolsasCal+=cantidadBolsas;
			break;
	}

	if( flag || precioBolsa>precioMasCaro)
	{
		precioMasCaro =	precioBolsa;
		tipoMasCaro = tipo;
		flag = 0;
	}


		seguir= prompt("Desea seguir ingresando datos? s/n");
	}while( seguir== "s");
	
//b) el importe total a pagar con descuento(solo si corresponde)
	if(acumBolsas>30)
	{
		descuento=importeBruto*.25;
	}
	else if(acumBolsas>10)
	{
		descuento=importeBruto*.15;
	}
	else
	{
		descuento=0;	
	}

	if(acumBolsas>10)
	{
		importeNeto = importeBruto-descuento;
	}
	else
	{
		importeNeto="Sin descuento";
	}
//d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.

	if( acumBolsasArena>acumBolsasCemento && acumBolsasArena>acumBolsasCal)
	{
		tipoMasCantBolsas="Arena";
	}
	else if( acumBolsasCemento>=acumBolsasArena && acumBolsasCemento>acumBolsasCal)
	{
		tipoMasCantBolsas= "Cemento";
	}
	else
	{
		tipoMasCantBolsas= "Cal";
	}
document.write("a) El importe total a pagar , bruto sin descuento es "+importeBruto+".<br>");
document.write("b) El importe total a pagar con descuento es "+importeNeto+".<br>");
document.write("d) El tipo con mas cantidad de bolsas en el total de la compra es "+tipoMasCantBolsas+".<br>");
document.write("f) El tipo mas caro es "+tipoMasCaro+".<br>");

}
