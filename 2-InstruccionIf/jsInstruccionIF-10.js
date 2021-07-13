function mostrar()
{
let nota;

nota = Math.floor(Math.random()*10+1);


if(nota==9 || nota==10)
{
	alert(nota +" excelente");
} 
else if(nota>=4)
{
	alert(nota +" aprovó");
}
else
{
	alert(nota +" Vamos, la proxima se puede");
}


}//FIN DE LA FUNCIÓN