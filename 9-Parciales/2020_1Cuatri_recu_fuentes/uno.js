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

/* 
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
	
	
	/*Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para
obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron Astrazeneca u otra
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor
a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron
fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No */
function mostrar()
{
let nombre;
let edad;
let genero;
let vacuna;
let temperatura;
let mayorTemp;
let nombreMayorTemp;
let vacunaMayorTemp;
let contGenFemS = 0;
let contGenNBO = 0;
let contGenMasSp = 0;
let contGenFem = 0;
let contGenMas = 0;
let contGenNB = 0;
let contPersAstM = 0;
let contPersAst = 0;
let contPersonas = 0;
let acumEdadHSput = 0;
let porcentaje = 0;
let flag = 1;
let contVacAst = 0;
let contVacSput = 0;
let contVacOtra = 0;
let vacMasApl = 0;
let acumEdadSput = 0;
let acumEdadAstr = 0;
let acumEdadOtra = 0;
let promAstr = 0;
let promSput = 0;
let promOtra = 0;
let porcGenMas = 0;
let porcGenFem = 0;
let porcGenNB = 0;
let promEdHS = 0;

do
{
	nombre = prompt("Ingrese un nombre").toLowerCase();
	while( nombre.length == 0 || !(isNaN(nombre)))
	{
		nombre = prompt("Error. Ingrese un nombre").toLowerCase();
	}

	edad = parseInt(prompt("Ingrese la edad"));
	while( isNaN(edad) || edad < 1)
	{
		edad = parseInt(prompt("Error. Ingrese la edad"));
	}
	

	genero = prompt("Ingrese su genero: `m´, `f´, `nb´").toLowerCase();
	while( genero!="m" && genero!= "f" && genero!= "nb")
	{
		genero = prompt("Error. Ingrese su genero: `m´, `f´, `nb´").toLowerCase();
	}

	vacuna = prompt("Ingrese la vacuna:“SputnikV”, “AstraZeneca”, “Otra” ");
	while( vacuna!= "SputnikV" && vacuna!= "AstraZeneca" && vacuna!= "Otra")
	{
		vacuna = prompt("Error. Ingrese la vacuna:“SputnikV”, “AstraZeneca”, “Otra” ");
	}

	temperatura = parseFloat(prompt("Ingrese su temperatura"));
	while( isNaN(temperatura) || temperatura<35 || temperatura > 45)
	{
		temperatura = parseFloat(prompt("Error. Ingrese su temperatura"));
	}
	//a) El nombre y vacuna de la persona con mayor temperatura.
	if( flag || temperatura>mayorTemp)
	{
		mayorTemp = temperatura;
		nombreMayorTemp = nombre;
		vacunaMayorTemp = vacuna;
		flag = 0;
	}
	//b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
	if( genero == "f" && vacuna == "SputnikV" )
	{
		contGenFemS++;
	}
	//c) La cantidad de personas de género No Binario que recibieron AstraZeneca u otra. 
	if( genero == "nb" && (vacuna == "AstraZeneca" || vacuna == "Otra"))
	{
		contGenNBO++;
	}
	//d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor
	//a 38°.
	if( vacuna == "AstraZeneca" && temperatura > 38)
	{
		contPersAstM++;
	}
	//e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron
	//fiebre. (37° o menos)
	if( genero == "m" && vacuna == "SputnikV" && temperatura <=37)
	{
		acumEdadHSput+= edad;
		contGenMasSp++;
	}
	//f) Porcentaje de personas que se aplicaron Aztrazeneca
	if( vacuna == "AstraZeneca")
	{
		contPersAst++;
	}
	//g) Cual fue la vacuna mas aplicada
	if(vacuna == "AstraZeneca")
	{
		acumEdadAstr+= edad;
		contVacAst++;
	}
	else if(vacuna == "SputnikV")
	{
		acumEdadSput+= edad;
		contVacSput++;
	}
	else
	{
		acumEdadOtra+= edad;
		contVacOtra++;
	}

//i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No 
if(genero == "m")
{
	contGenMas++;
}
else if(genero== "f")
{
	contGenFem++;
}
else
{
	contGenNB++;
}

	contPersonas++;
	seguir= prompt("Desea seguir cargando datos? s/n").toLowerCase();
}while(seguir == "s");
//e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron
//fiebre. (37° o menos)
promEdHS = acumEdadHSput/contGenMasSp;

//f) Porcentaje de personas que se aplicaron Aztrazeneca
porcentaje= contPersAst*100/contPersonas;
//g) Cual fue la vacuna mas aplicada

if(contVacSput>contVacAst && contVacSput>contVacOtra)
{
	vacMasApl = contVacSput;
}
else if(contVacAst>=contVacSput && contVacAst>contVacOtra)
{
	vacMasApl = contVacAst;
}
else
{
	vacMasApl = contVacOtra;
}
//h) Promedio de edad de las personas que se dieron cada vacuna
promAstr= acumEdadAstr/contVacAst;
promSput= acumEdadHSput/contVacSput;
promOtra= acumEdadOtra/contVacOtra;
//i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No 
porcGenMas = contGenMas*100/contPersonas;
porcGenFem = contGenFem*100/contPersonas;
porcGenNB = contGenNB*100/contPersonas;

document.write("a) La persona con mayor temperatura se llama "+nombreMayorTemp+" y su vacuna fue de "+vacunaMayorTemp+".<br>");
document.write("b) La cantidad de personas de género Femenino recibieron la vacuna SputnikV fue de "+contGenFemS+".<br>");
document.write("c) La cantidad de personas de género No Binario que recibieron Astrazeneca u otra fue de "+contGenNBO+".<br>");
document.write("d) Las personas que se aplicaron la vacuna AstraZeneca y presentaron una temperatura mayor a 38° fueron "+contPersAstM+".<br>");
document.write("e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos) es de "+promEdHS+".<br>");
document.write("f) Porcentaje de personas que se aplicaron Aztrazeneca fue de "+porcentaje+".<br>");
document.write("g) La vacuna mas aplicada fue "+vacMasApl+".<br>");
document.write("h) El promedio de edad de las personas que se dieron cada vacuna fue de AstraZeneca "+promAstr+", de SputnikV "+promSput+" y de Otras "+promOtra+".<br>");
document.write("i) Que porcentaje de personas de cada genero hay: "+porcGenFem+"% Femenino, "+porcGenMas+"% Masculino y "+porcGenNB+"% NB.<br>")

}

