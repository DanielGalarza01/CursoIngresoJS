//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.

function mostrar()
{
    let precio;
    let porcDesc;
    let precioFinal;

    
    precio = parseFloat(prompt("Ingrese el precio"));
    porcDesc = parseInt(prompt("Ingrese el porcentaje de descuento"));
    precioFinal = precio - (precio * porcDesc/100);
    document.getElementById("elPrecioFinal").value = precioFinal;

}
