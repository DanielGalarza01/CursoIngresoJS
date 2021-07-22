/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
    let numero;
    let maximo;
    let minimo;
    let seguir;
    flag = 0;

    do {
        numero = parseInt(prompt("Ingrese un número"));
        while(isNaN(numero))
        {
            numero = parseInt(prompt("valor invalido, ingrese otro número"));
        }
        if(flag==0)
        {
            maximo=numero;
            minimo=numero;
            flag=1;
        }
        else
        {
            if(numero>maximo)
            {
                maximo=numero;
            }
            else if(numero<minimo)
            {
                minimo=numero;
            }
        }
        seguir = prompt("Seguimos? s/n").toLowerCase();
    } while (seguir == 's');
    document.getElementById("txtIdMaximo").value =maximo; 
    document.getElementById("txtIdMinimo").value =minimo;

}//FIN DE LA FUNCIÓN