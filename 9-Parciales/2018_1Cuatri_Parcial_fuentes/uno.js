//Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;


    ancho = parseInt(prompt("Ingrese el largo"));
    largo = parseInt(prompt("Ingrese el largo"));
    perimetro = 2*largo + 2*ancho;
    alert("El perimetro es "+perimetro);    
}