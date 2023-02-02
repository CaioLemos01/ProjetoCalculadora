var r = document.getElementById("resultado")

function insert(number) {
    var num = Number(number)
    r.innerHTML += `${num}`
}

function clean() {
    r.innerHTML = ""
}

function operator(operator) {
    var op = String(operator)

    //Tirar a possibilidade de várias vírgulas seguidas e operadores sem números
    if (op == "," && r.innerText.includes(",")) {
        return
    } else if (op == "," && r.innerText.length == 0) {
        r.innerHTML += `0${op}`
    } else if (r.innerHTML.length == 0) {
        return
    } else {
        r.innerHTML += `${op}`
    }

    //Operador de troca de sinal
    if (op == ''){
        r.innerHTML *= -1 
    }

    //Tirar a possibilidade de operadores seguidos

}

function calcular() {

}
