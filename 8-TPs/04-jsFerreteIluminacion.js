/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantidad;
    let marca;
    let descuento;
    let porcDesc;
    let precioDescuento;
    let precio;
    let importeTotal;
    let IIBB;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precio = 35;

    switch(cantidad)
    {
        case 1:
        case 2:
            porcDesc= 0;
            break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                porcDesc= .15;
            }
            else if(marca == "FelipeLamparas")
            {
                porcDesc = .10;
            }
            else
            {
                porcDesc = .05;
            }
            break;   
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcDesc = .25;
            }
            else
            {
                porcDesc = .20;
            }
            break;
        case 5:
            if(marca == "ArgentinaLuz")
            {
                porcDesc = .40;   
            }
            else
            {
                porcDesc = .30;
            }
            break;
        default:
            {
                porcDesc = .50;
                break;
            }
    }

    descuento = precio * porcDesc;
    precioDescuento = precio - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioDescuento;

    importeTotal = cantidad * precioDescuento;

    if( importeTotal > 120)
        {
            IIBB = importeTotal * 0.1;
            importeTotal = importeTotal + IIBB;
            alert("Importe total $"+ importeTotal+". Usted pagó de IIBB $"+IIBB);
        }
        else
        {
            alert("ImporteTotal $"+importeTotal);
        }
    
    

}
    /*let precio;
    let cantidad;
    let marca;
    let descuento;
    let precioFinal;
    let ingresosBrutos;
    let impuesto;

    precio = 35;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").val;ue

    switch(cantidad)
    {
        case 6:
            precioFinal = precio*6*.5;    
            break;
        case 5:
            if(marca == "ArgentinaLuz")
            {
                precioFinal = precio*5*.6;    
            }
            else
            {
                precioFinal = precio*5*.7;
            }
            break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                precioFinal = precio*4*.75;
            }
            else
            {
                precioFinal = precio*4*.8;
            }
            break;
        case 3:
            if(marca == "ArgentinaLuz")
            {
                precioFinal = precio*3*.85;
            }
            else if(marca == "FelipeLamparas")
            {
                precioFinal = precio*3*.9;
            }
            else
            {
                precioFinal = precio*3*.95;
            }
            break;   
    }
    if(precioFinal<=120)
    {
        document.getElementById("txtIdprecioDescuento").value = precioFinal;
    }
    else
    {
        ingresosBrutos = precioFinal*1.1;
        document.getElementById("txtIdprecioDescuento").value = ingresosBrutos;
        impuesto = ingresosBrutos - precioFinal;
        alert("Usted pagó $"+impuesto+"de IIBB");  
    }
    */
//}
