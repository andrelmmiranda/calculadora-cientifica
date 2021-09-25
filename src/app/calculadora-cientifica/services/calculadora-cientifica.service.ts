import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraCientificaService {
/* Definindo as constantes utilizadas para identificar as operações de calculo. */ 
static readonly SOMA: string = '+';
static readonly SUBTRACAO: string = '-';
static readonly DIVISAO: string = '/';
static readonly MULTIPLICACAO: string = '*';
static readonly ELEVADOQUADRADO: string = 'x2';
static readonly ELEVADOCUBO: string = 'x3';
static readonly QUADRADO: string = 'raiz';
static readonly PI: string = 'pi';
static readonly PERCENT: string = '%';

constructor() { }

/**
 * METODO que calcula uma operaçao matematica dado dois numeros e uma operaçao
 * SUPORTA as operaçoes de soma, subtraçao, divisao, multiplicaçao, elevado ao quadrado, elevado ao cubo, raiz quadrada e PI
 * 
 * @param num1 number
 * @param num2 number
 * @param operacao string
 * @returns Resultado da operação (number)
 */

calcular(num1: number, num2: number, operacao: string):number {
  let resultado: number;

  switch(operacao){
    case CalculadoraCientificaService.SOMA:
      resultado = num1 + num2;
      break;

    case CalculadoraCientificaService.SUBTRACAO:
      resultado = num1 - num2;
      break;

    case CalculadoraCientificaService.DIVISAO:
      resultado = num1 / num2;
      break;

    case CalculadoraCientificaService.MULTIPLICACAO:
      resultado = num1 * num2;
      break;

    case CalculadoraCientificaService.ELEVADOQUADRADO:
      resultado = num1 * num1;
      break;

    case CalculadoraCientificaService.ELEVADOCUBO:
      resultado = Math.pow(num1, 3);
      break;

    case CalculadoraCientificaService.QUADRADO:
      resultado = Math.sqrt(num1);
      break;

    case CalculadoraCientificaService.PI:
      resultado = num1 * 3.14;
      break;

    case CalculadoraCientificaService.PERCENT:
      resultado =  num1 - num1*(num2/100);
      break;

    default:
      resultado = 0;
  }
  return resultado;
}
  
}
