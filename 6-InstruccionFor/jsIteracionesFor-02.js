function mostrar()
{
	//let contador=0;
	//let acumulador=0;
	/*do
	{
		acumulador += parseInt(prompt("ingrese un numero"));
		contador++;
	}while(acumulador < 1000);
	alert("El número es "+acumulador+" y se utilizó "+contador+ " repeticiones");*/

	for(let num=10; num>0; num--)
	{
		document.write(num+"<br>"); 
	}
}