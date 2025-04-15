let numero= parseFloat(prompt("Insira um número:)")); 

if(isNaN(numero)) {
    alert("Erro! Digite um número válido!");
}
else {
    if (numero%2==0) {
        alert("O número que você digitou é par!");

    } else {
        alert("O número que você digitou é ímpar!");

    }
}
