function soma(){
    var numero01 = document.getElementById("number1").valueAsNumber
    var numero02 = parseFloat(document.getElementById("number2").value)
    var resposta = document.getElementById("respSoma")
    resposta.textContent = numero01 + numero02
}

function sub(){
    var numero01 = parseFloat(document.getElementById("number3").value)
    var numero02 = parseFloat(document.getElementById("number4").value)
    var resposta = document.getElementById("respSub")
    resposta.textContent = numero01 - numero02
}
