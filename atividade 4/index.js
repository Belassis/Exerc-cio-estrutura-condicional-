let compra= parseFloat(prompt("Insira o valor da sua compra:)"));
let desconto= compra*0.1

if(isNaN(compra)) {
    alert("Erro! Digite um número válido!");
}
else {
    if (compra >=100) {
        alert ("Você adquiriu um desconto de R$"+desconto+"😁.Sua compra agora é de:R$" +(compra-desconto)+".")
    } else{
        alert ("Poxa! Você não ganhou um desconto!😔")
    }
}