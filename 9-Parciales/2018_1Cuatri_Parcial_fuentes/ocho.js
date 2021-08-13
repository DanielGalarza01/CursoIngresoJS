/* Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7) */
function mostrar()
{
   let letra;
   let numero;
   let seguimos;
   let contNumPares = 0;
   let contNumImp = 0;
   let contCeros = 0;
   let contPos = 0;
   let acumPositivos = 0;
   let promPos =  0;
   let acumNegativos = 0;
   let numMax;
   let letraMax;
   let flagMax = 1;
   let numMin;
   let letraMin;
   let flagMin = 1;


   do
   {
       letra = prompt("Ingrese una letra").toLowerCase();
       numero = parseInt(prompt("Ingrese un número entre -100 y 100, inclusive"));
       while( numero<-100 || numero>100)
       {
        numero = parseInt(prompt("Error. Ingrese un número entre -100 y 100, inclusive"));
       }

       //a) La cantidad de números pares.
       if( numero%2 == 0 && numero!= 0)
       {
            contNumPares++;
       }
       //b) La cantidad de números impares.
       else if( numero%2  != 0 && numero != 0 )
       {
           contNumImp++;
       }
       //c) La cantidad de ceros.
       else
       {
            contCeros++;
       }
       //d) El promedio de todos los números positivos ingresados.
       if (numero>0)
       {
           acumPositivos += numero;
           contPos++;
       }
       //e) La suma de todos los números negativos.
       else
       {
           acumNegativos += numero;
       }
       //f) El número y la letra del máximo y el mínimo.
       if ( flagMax || numMax<numero)
       {
           numMax = numero;
           letraMax = letra;
           flagMax = 0;
       }
       if ( flagMin || numMin>numero)
       {
           numMin = numero;
           letraMin = letra;
           flagMin = 0;
       }
       

       seguimos = prompt("Desea seguir ingresando datos: 's' o 'n' ").toLowerCase();
   }while( seguimos== "s");
   //d) El promedio de todos los números positivos ingresados.
   promPos = acumPositivos / contPos;

   document.write("a) La cantidad de números pares es "+contNumPares+".<br>");
   document.write("b) La cantidad de números impares es "+contNumImp+".<br>");
   document.write("c) La cantidad de ceros es "+contCeros+".<br>");
   document.write("d) El promedio de todos los números positivos ingresados es "+promPos+".<br>");
   document.write("e) La suma de todos los números negativos "+acumNegativos+".<br>");
   document.write("f) El número y la letra del máximo es: "+numMax+", "+letraMax+" y el mínimo es: "+numMin+", "+letraMin+".");
}
