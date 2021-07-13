function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtIdEdad").value);

  if (edad < 13) 
  {
    alert("Es niño");
  } 
  else if (edad >= 18) 
  {
    alert("Es mayor de edad");
  }
   else 
  {
    alert("Es adolescente");
  }
} //FIN DE LA FUNCIÓN
