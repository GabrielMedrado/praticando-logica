"use strict";

function helloWorld() {
  console.log("Hello world");
}
helloWorld();

function helloName(nome) {
  console.log(`Hello ${nome}`);
}
helloName("Medrado");

function doubleNumber(number) {
  return Number(number * 2);
}
console.log(doubleNumber(7));

function mediaOfNumbers(num1, num2, num3) {
  let calc = Number(num1 + num2 + num3 / 3);
  return `A média dos números é ${calc}`;
}
console.log(mediaOfNumbers(10, 20, 30));

function returnThebigger(num1, num2) {
  let comparation = num1 > num2 ? num1 : num2;
  return `O número maior é: ${comparation}`;
}
console.log(returnThebigger(50, 100));

function multiplyByYourself(number) {
  return Number(number * number);
}
console.log(multiplyByYourself(7));

//----------------------------------------

function calcImc(peso, altura) {
  let alt = altura * altura;
  let calc = peso / alt;
  return parseInt(calc);
}
console.log(calcImc(60, 1.7));

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.8;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);

  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 3;
let largura = 5;
calcularAreaPerimetroSalaRetangular(altura, largura);

function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;

  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}
let raio = 4;
calcularAreaPerimetroSalaCircular(raio);

function mostrarTabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
}

mostrarTabuada(numero);
