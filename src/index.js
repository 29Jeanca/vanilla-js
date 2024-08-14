import { calculadora } from './calculadora';

function calcular(operacion, numero1, numero2) {
  switch (operacion) {
    case 'sumar':
      return calculadora.sumar(numero1, numero2);
    case 'restar':
      return calculadora.restar(numero1, numero2);
    case 'dividir':
      return calculadora.dividir(numero1, numero2);
    case 'multiplicar':
      return calculadora.multiplicar(numero1, numero2);
    default:
      throw new Error('Operación no válida');
  }
}
