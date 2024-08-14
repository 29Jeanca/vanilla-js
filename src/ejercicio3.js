// Inserte el código aquí
function clonarArreglo(arreglo) {
    return [...arreglo]; 
  }
  function clonarObjeto(objeto) {
    return { ...objeto }; 
  }
  function sumar(...numeros) {
    return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  }
  
  function saludar(nombre = "Desconocido") {
    return `Hola ${nombre}`;
  }
  

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };