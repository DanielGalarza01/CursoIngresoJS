/* Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
e) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 ) */

function mostrar()
{
    let marca;
    let peso;
    let temperatura;
    let contTempPares = 0;
    let marcaMasPesado;
    let flagMax = 1;
    let contProdFrios = 0;
    let acumPesoProd = 0;
    let contProd = 0;
    let promPesoProd;
    let pesoMax;
    let pesoMin;
    let flagMin = 1;
    let seguir;

    do
    {
        marca = prompt("Ingrese la marca del producto");

        peso = parseFloat(prompt("Ingrese el peso del producto, entre 1 y 100."));
        while( isNaN(peso) || peso < 1 || peso > 100)
        {
            peso = parseFloat(prompt("Error. Ingrese el peso del producto, entre 1 y 100."));
        }

        temperatura = parseFloat(prompt("Ingrese la temperatura. Debe ser entre -30 y 30."));
        while( isNaN(temperatura) || temperatura<-30 || temperatura>30)
        {
            temperatura = parseFloat(prompt("Error. Ingrese la temperatura. Debe ser entre -30 y 30."));
        }
        seguir = prompt("Desea seguir ingresando datos? 's' o 'n' ").toLowerCase();

        //a) La cantidad de temperaturas pares.
        if(temperatura%2 == 0)
        {
            contTempPares++;
        }
        //b) La marca del producto más pesado.
        if( flagMax || pesoMax<peso )
        {
            pesoMax = peso;
            marcaMasPesado = marca;
            flagMax = 0;
        }
        //c) La cantidad de productos que se conservan a menos de 0 grados.
        if( temperatura<0)
        {
            contProdFrios++;
        }
        //d) El promedio del peso de todos los productos.

        acumPesoProd += peso;
        contProd++;

        //e) El peso máximo y el mínimo.
        if( flagMin || pesoMin>peso )
        {
            pesoMin = peso;
            flagMin = 0;
        }

    }while( seguir == "s");

    promPesoProd = acumPesoProd / contProd;

    document.write("a) La cantidad de temperaturas pares es de "+contTempPares+".<br>");
    document.write("b) La marca del producto más pesado es "+marcaMasPesado+".<br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados es de "+contProdFrios+".<br>");
    document.write("d) El promedio del peso de todos los productos es de "+promPesoProd+".<br>");
    document.write("e) El peso máximo es "+pesoMax+" y el mínimo  es "+pesoMin+".<br>");

}
