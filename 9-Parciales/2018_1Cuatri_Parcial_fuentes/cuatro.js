/* Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10". */

function mostrar()
{
    let numberOne;
    let numberTwo;
    let resultado;

    numberOne = parseInt(prompt("Ingrese un número"));
    while(isNaN(numberOne)|| numberOne<1)
    {
        numberOne = parseInt(prompt("Error, Ingrese un número valido"));
    }
    numberTwo = parseInt(prompt ("Ingrese un segundo número"));
    while(isNaN(numberTwo)|| numberTwo<1)
    {
        numberTwo = parseInt(prompt("Error, Ingrese un número valido"));
    }

    if( numberOne==numberTwo)
    {
        alert(numberOne+""+numberTwo);
    }
    else if( numberOne>numberTwo)
    {
        resultado = numberOne - numberTwo;
        alert("El resultado de la resta es "+resultado);
    }
    else
    {
        resultado = numberOne + numberTwo;
        if(resultado>10)
        {
            alert("El resultado es "+resultado+" y superó  el 10.");
        }
        else{
            alert("El resultado es "+resultado);
        }
    }
}
