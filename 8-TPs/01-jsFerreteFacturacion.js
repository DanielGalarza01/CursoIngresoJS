/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
     
//Definimos las variables.
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;

//Asignamos valores a las variables.
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    resultado = precioUno + precioDos + precioTres;

//Devolvemos el valor requerido.
    alert("El resultado de la suma es "+ resultado);

}

function Promedio () 

{
     
//Definimos las variables.
let precioUno;
let precioDos;
let precioTres;
let resultado;

//Asignamos valores a las variables.
precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
resultado = (precioUno + precioDos + precioTres)/3;

//Devolvemos el valor requerido.
alert("El promedio es "+ resultado);

}

function PrecioFinal () 

{
     
//Definimos las variables.
let precioUno;
let precioDos;
let precioTres;
let resultado;

//Asignamos valores a las variables.
precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
resultado = (precioUno + precioDos + precioTres) * 1.21;

//Devolvemos el valor requerido.
alert("El precio final es "+ resultado);

}