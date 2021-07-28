/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

---------------------------------------------
Estrategia de resolucion
1- declarar variables (tipo / cantidad / precio / marca / fabricante )esto se lo pedimos al usuario
a) precioMinAl / contAlBarato / fabAlBarato
b) contadorB / contadorA / contadorJ / maxUnidades / acumB / acumA / acumJ / promedio
c) (acumJ)ya lo tuve en cuenta en el punto b

2- generar un bucle que se repita 5 veces (for) porque se las veces que se debe repetir
2.1- cosas que se tienen que hacer 5 veces(van dentro del bucle)
 datos del producto
 2.1.1- pido tipo y valido
 2.1.2- pido precio y valido
 2.1.3- pido cantidad y valido
 2.1.4- pido marca y valido
 2.1.5- pido fabricante y valido
 -------------------------------
 a) me fijo si el producto es de tipo alcohol y si es asi la primer vez que 
 ingresa alcohol guardo el precio en precio barato y las siguientes veces
 que ingrese un alcohol lo comparo con el precio del acohol barato y si es mas barato lo actualizo(tambien guardo cantidad y fabricante)
 b) me fijo de que tipo es el producto y actualizo acumulador y contador de ese tipo
 c) si es de tipo jabon acumulo la cantidad(ya lo hice en el punto b)
-------------------------------------------
3.1 cosas que hago una sola vez despues del for
3.1.1 para el punto b me tengo que fijar cual es el mayor acumulador
y sacar el promedio para ese tipo

3.2 muestro los resultados */
function mostrar()
{	
        let tipo;
        let cantidad;
        let precio;
        let marca;
        let fabricante;
        let precioMinAl;
        let cantAlBarato;
        let fabAlBarato;
        let flagA = 1;
        let contadorA = 0;
        let contadorB = 0;
        let contadorJ = 0;
        let acumuladorA = 0;
        let acumuladorB = 0;
        let acumuladorJ = 0;
        let maxUnidades;
        let promedio;
    
        for(let i=0; i < 1; i++){
             tipo = prompt("Ingrese tipo (barbijo/alcohol/jabon): ").toLowerCase();
             while( !(tipo == "alcohol" || tipo == "barbijo" || tipo == "jabon")  ){
                 tipo = prompt("Tipo invalido. Reingrese tipo (barbijo/alcohol/jabon): ").toLowerCase();
             }
    
             precio = parseInt(prompt("Ingrese precio (100-300): "));
             while( !(precio >= 100 && precio <= 300)  ){
                 precio = parseInt(prompt("Precio invalido. Reingrese precio (100-300): "));
             }
             cantidad = parseInt(prompt("Ingrese cantidad max 1000: "));
             while( isNaN(cantidad) || cantidad < 1 || cantidad > 1000 ){
                 cantidad = parseInt(prompt("Cantidad invalida. Reingrese cantidad max 1000: "));
             }
    
             marca = prompt("Ingrese marca: ");
             while( marca.length == 0){
                 marca = prompt("Error. Ingrese marca: ");
             }
             fabricante = prompt("Ingrese fabricante: ");
             while( fabricante.length == 0){
                 fabricante = prompt("Error. Ingrese fabricante: ");
             }
			 if(tipo=="alcohol")
			 {
				if(flagA1||	precio < precioMinAl)
				{
					precioMinAl=  precio;
					fabAlBarato = fabricante;
					cantAlBarato = cantidad;
					flagA = 0;
				}
			 }
			 else if(tipo=="barbijo")
			 {
				acumuladorB	= acumuladorB + cantidad;
				contadorB++;
			 }	
			 else
			 {

			 }		 
            
    }

	if(acumuladorJ > acumuladorA  &&  acumuladorJ < acumuladorB)
	{
		maxUnidades = "jabón";
		promedio = aacumuladorj / contaadorJ;
	}
	else if(acumulador >=)
}
