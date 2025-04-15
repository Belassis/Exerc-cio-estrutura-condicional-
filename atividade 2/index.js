let idade= parseFloat(prompt("Insira sua idade😊"));

if(isNaN(idade)) {
    alert("Erro! Digite um número válido!");
}
else {
    if (idade>=18) {
        alert("Você é maior de idade!");

    } else {
        alert("Você é menor de idade!");

    }
}
