let numero= parseFloat(prompt("Insira um número:)"));

if(isNaN(numero)) {
    alert("Erro! Digite um número válido!");
}
else {
    if (numero%5==0) {
        alert("Esse número é múltiplo de 5!");

    } else {
        alert("Esse número não é múltiplo de 5!");

    }
}
