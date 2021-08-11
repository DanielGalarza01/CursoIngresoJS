/* Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6. */

function mostrar()
{
    let nota;
    let sexo;
    let acumNotas=0;
    let promedio;
    let notaMasBaja;
    let sexoMasBajo;
    let flag=1;
    let contVarones=0;


    for(let i=0; i<5; i++)
    {
        nota = parseInt(prompt("Ingrese la nota"));
        while(isNaN(nota) || nota<0 || nota>10)
        {
            nota = parseInt(prompt("Error. Ingrese la nota"));
        }
        sexo = prompt("Ingrese el sexo 'f' o 'm'.").toLowerCase();
        while( sexo!="f" && sexo!= "m")
        {
            sexo = prompt("Error. Ingrese el sexo 'f' o 'm'.").toLowerCase(); 
        }
        //a) El promedio de las notas totales.
        acumNotas+=nota;
        //b) La nota más baja y el sexo de esa persona.
        if(flag || notaMasBaja>nota);
        {
            notaMasBaja=nota;
            sexoMasBajo=sexo;
            flag=0;
        }
        //c) La cantidad de varones que su nota haya sido mayor o igual a 6.
        if(sexo=="m"&& nota>=6)
        {
            contVarones++;
        }


    }
     //a) El promedio de las notas totales.
    promedio = acumNotas/5;

    alert("a) El promedio de las notas totales es "+promedio+".\nb) La nota más baja es "+notaMasBaja+" y el sexo de esa persona es "+sexoMasBajo+".\nc) La cantidad de varones que su nota haya sido mayor o igual a 6 es "+contVarones+".")


}
