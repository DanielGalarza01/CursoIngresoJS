/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

Estrategia de resolución

1.- Declarar variables
a.- cosas que le pedimos al usuario
tipo, cantidad, precio, seguir.
b.- descuento, importe bruto, importe neto
 mayorPrecio, mayorTipo, acumBA, acumBCal/ acumBC/maxBolsas/cantBolsas/

2.- Genero un bucle del tipo mientras el usuario quiera. (while)
3.- cosas que se repiten por cada producto comprado.
3.1.- pido y valido tipo.
3.2.- pido y valido la cantidad de bolsas.(ni cero ni negativo)
3.3.- pido y valido precio
3.4.-acumular la cantiadad de bolsas/acumulador de precioBruto
3.5.-acumular precio bruto.
3.6.- me fijo el tipo de producto y acumulo la cantidad de bolsas según corresponda
3.7 .- para el primer producto guardo el tipo y el precio, es el unico y por ende es el más caro y para los siguientes voy a comparar sus precios con el mas caro y actualizo `precio y tipo´

Despues del bucle 
calculo me fijo que descuento corresponde de acuerdo al acumulador de bolsas.
calculo el descuento
calculo el importe neto.
me fijo cual es el acumulador de bolsas para informar el tipo de producto que se compraron mas bolsas.
mostrar los resultados.
*/

function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let seguir;
  let descuento;
  let importe;
  let importeBruto=0;
  let importeNeto;
  let acumBolsas=0;
  let mayorPrecio;
  let mayorTipo;
  let flag = 1;
  let acumA=0;
  let acumC=0;
  let acumCal=0;
  let tipoMaxBolsas;
  let cantMaxBolsas;
  
  do
  {
    tipo=prompt("Ingrese un tipo (cal, arena, cemento)").toLowerCase();
    while(!( tipo=="arena" || tipo=="cemento" || tipo=="cal"))
    {
      tipo=prompt("Error, ingrese un tipo valido").toLowerCase();
    }
    
    cantidad=parseInt(prompt("Ingrese la cantidad"));
    while( isNaN(cantidad) || cantidad<=0 )
    {
      cantidad=parseInt(prompt("Valor invalido. Ingrese la cantidad"));
    }

    precio=parseInt(prompt("Ingrese el precio"));
    while(isNaN(precio) || precio<=0 )
    {
      precio=parseInt(prompt("Valor invalido. Ingrese el precio"));
    } 

    acumBolsas+=cantidad;
    importe = precio * cantidad;
    importeBruto += importe;

    switch(tipo)
    {
      case "arena":
        acumA += cantidad;
        break;

      case "cal":
        acumCal += cantidad;
        break;
      case "cemento":
        acumC += camtidad;
        break;
    }

    if( flag || precio > mayorPrecio )
    {
      mayorPrecio = precio;
      mayorTipo = tipo;
      flag = 0;
    }
  
    seguir=prompt("Desea agregar otro articulo? s/n");
  }while(seguir=="s");

  if(acumBolsas > 30)
  {
    descuento = importeBruto * .25;
  }
  else if(acumBolsas > 10)
  {
    descuento = importeBruto * .15;
  }
  else 
  {
    descuento = 0;
  }


  importeNeto = importeBruto - descuento;

  if(acumA > acumC && acumA > acumCal)
  {
    tipoMaxBolsas = "arena";
    cantMaxBolsas = acumA;
  }
  else if(acumC >= acumA && acumC > acumCal)
  {
    tipoMaxBolsas = "cemento";
    cantMaxBolsas = acumC;
  }
  else
  {
    tipoMaxBolsas = "cal";
    cantMaxBolsas = acumCal;
  }

  document.write("a) El importe total a pagar es "+importeBruto+"<br>");
  if(descuento>0)
  {
    document.write("b) El importe total a pagar es "+importeNeto+"<br>");
  }
  
  document.write("d) El tipo con más cantidad de bolsas es "+tipoMaxBolsas+" con "+cantMaxBolsas+" bolsas<br>");
  document.write("e) El tipo más caro es "+mayorTipo+" con un precio de "+mayorPrecio+".<br>");


  
}
