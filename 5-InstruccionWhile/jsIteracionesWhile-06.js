function mostrar()
{
let number1;
let number2;
let number3;
let number4;
let number5;
let suma;
let promedio;


number1=parseInt(prompt("Ingrese el primer número"));
number2=parseInt(prompt("Ingrese el segundo número"));
number3=parseInt(prompt("Ingrese el tercer número"));
number4=parseInt(prompt("Ingrese el cuarto número"));
number5=parseInt(prompt("Ingrese el quinto número"));

suma = number1+number2+number3+number4+number5;
promedio = suma/5;

document.getElementById("txtIdSuma").value = suma;
document.getElementById("txtIdPromedio").value = promedio; 

}//FIN DE LA FUNCIÓN