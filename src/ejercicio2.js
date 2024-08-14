class Contador {
  constructor() {
    this.valor = 0; 
  }

  siguiente() {
    this.valor += 1; 
  }
}

const instancia = new Contador(); 

export { instancia };
