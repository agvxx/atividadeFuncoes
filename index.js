function MAIOR_MENOR() {
  let valores = [
      parseInt(document.getElementById("valor1").value),
      parseInt(document.getElementById("valor2").value),
      parseInt(document.getElementById("valor3").value),
      parseInt(document.getElementById("valor4").value),
      parseInt(document.getElementById("valor5").value)
  ];
  
  let maior = Math.max(...valores);
  let menor = Math.min(...valores);
  
  document.getElementById("resultado").innerHTML = 
  "Maior valor: " + maior + "<br>Menor valor: " + menor;
}

function VOGAL(caractere){
  

  caractere = caractere.toLowerCase(); 
  if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u'){
      return 1;
  }
  else {
      return 0;
  }
  if (resultado === 1) {
    alert(`O caractere "${caractere}" é uma vogal.`);
} else {
    alert(`O caractere "${caractere}" não é uma vogal.`);
}
}
function verificarVogal() {
  const caractere = document.getElementById("caractere").value;

  if (caractere.length !== 1) {
      alert("Por favor, insira apenas um caractere.");
      return;
  }

  const resultado = VOGAL(caractere);
  if (resultado === 1) {
      alert(`O caractere "${caractere}" é uma vogal.`);
  } else {
      alert(`O caractere "${caractere}" não é uma vogal.`);
  }
}

function ORDEM(a, b, c) {
  let numeros = [a, b, c];
  numeros.sort(function(x, y) { return x - y; });
  return numeros;
}
function ordenarValoresPrompt() {
  const a = parseInt(prompt("Digite o primeiro valor inteiro:"));
  const b = parseInt(prompt("Digite o segundo valor inteiro:"));
  const c = parseInt(prompt("Digite o terceiro valor inteiro:"));

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
      alert("Por favor, insira valores inteiros válidos.");
      return;
  }

  const resultado = ORDEM(a, b, c);
  alert(`Os valores ordenados são: ${resultado.join(', ')}`);
}

function determinarOSinal(){
  const a = parseInt(prompt("Digite o primeiro valor inteiro:"));

  if(a => 0){
    alert(`O número é ${Boolean(true)};`)
  } else {
    alert(`O número é ${Boolean(false)};`)
  }
}

function determinarParOuImpar(){
  const a = parseInt(prompt("Digite o primeiro valor inteiro:"));

  if(a % 2 == 0){
    alert(`O número é par;`)
  } else {
    alert(`O número é ímpar;`)
  }
}

function numerosParesESomatorio() {
  const li = parseInt(prompt("Digite o limite inferior do intervalo:"));
  const ls = parseInt(prompt("Digite o limite superior do intervalo:"))

  let pares = [];
  let somatorio = 0;

  for (let i = li + 1; i < ls; i++) {
    if (i % 2 === 0) {
     pares.push(i);
     somatorio += i;
 }
}

  if (pares.length > 0) {
    alert(`Números pares no intervalo (${li}, ${ls}): ${pares.join(', ')}\nSomatório: ${somatorio}`);
   }else {
    alert(`Não há números pares no intervalo (${li}, ${ls}).`);
  }
}
