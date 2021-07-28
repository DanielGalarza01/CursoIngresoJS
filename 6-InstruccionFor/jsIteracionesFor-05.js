/* Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9. */
function mostrar()
{
let num;
for(let i=1; ;i++)
{
num=parseInt(prompt("Ingrese un número"));

while(isNaN(num)||num<0)
{
	num=parseInt(prompt("ERROR, ingrese otro valor"));
}
	if(num==9)
	{	
		alert("Usted ingrese el número 9");
		break;
	}
}











	/* let repeat;
	let num = parseInt(prompt("ingrese un número"));
	for(i=1;      ; i++)
	{
		{
		while(isNaN(cant))
		{
			num = parseInt(prompt("eso no es un número, ingrese un número"));
		}
		if(num==9)
		{
			break
		}
	}

	
	alert("Usted ingreso el número 9"); */

}//FIN DE LA FUNCIÓN