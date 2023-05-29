const display = document.querySelector(".calculo_res span")
const preview = document.querySelector(".preview span")
const apagar = document.querySelector(".apagar_botao")
const limpar = document.querySelector("#limpar")
const parentese = document.querySelector("#parentese")
const porcentagem = document.querySelector("#porcentagem")
const negativo = document.querySelector("#negativo")
const virgula = document.querySelector("#virgula")
const igual = document.querySelector("#igual")

let primeiro_valor = ""
let tem_primeiro_valor = false
let segundo_valor = ""
let tem_segundo_valor = false
let tem_virgula = false
let sinal = ""
let resultado_final = ""
let calculo_res = ""
let colocar_parentese = ""
let tem_parentese = false
let teste3 = primeiro_valor

function displayContador() {

    if (primeiro_valor != "") {
        display.innerHTML = primeiro_valor
    }
    if (primeiro_valor != "" && tem_parentese == true) {
        display.innerHTML = "(" + primeiro_valor
    }
    if (sinal != "") {
        display.innerHTML += sinal
    }
    if (segundo_valor != "") {
        display.innerHTML += segundo_valor

    }

}

function receberPrimeiroValor(valor) {
    if (tem_primeiro_valor == false) {
        calculo_res = ""
        primeiro_valor += valor.target.value
        calculo_res = primeiro_valor
        primeiro_valor = + primeiro_valor
    }

    if (tem_primeiro_valor == true) {
        calculo_res = ""
        segundo_valor += valor.target.value
        calculo_res += segundo_valor
        segundo_valor = + segundo_valor
    }
}

function receberSinal(operador) {
    sinal = operador.target.value
    tem_primeiro_valor = true
    // display.innerHTML = sinal
    // calculo_res = sinal

}

igual.addEventListener("click", function () {
    switch (sinal) {
        case "+":
            resultado_final = parseFloat(primeiro_valor) + parseFloat(segundo_valor)

            break;
        case "-":
            resultado_final = parseFloat(primeiro_valor) - parseFloat(segundo_valor)

            break;
        case "÷":
            resultado_final = parseFloat(primeiro_valor) / parseFloat(segundo_valor)

            break;
        case "x":
            resultado_final = parseFloat(primeiro_valor) * parseFloat(segundo_valor)

            break;
        default:
            break;
    }
    primeiro_valor = resultado_final
    segundo_valor = ""
    preview.innerHTML = resultado_final
    display.innerHTML = resultado_final
})

apagar.addEventListener("click", function () {
    if(display.innerHTML !== "") {
        display.innerHTML = display.innerHTML.toString().slice(0, -1)
    }
    if(segundo_valor !== "") {
      segundo_valor = segundo_valor.toString().slice(0, -1);
    } else if (sinal !== "") {
      sinal = "";
    } else if (primeiro_valor !== "") {
      primeiro_valor = primeiro_valor.toString().slice(0, -1);
    }
    displayContador();
  });

limpar.addEventListener("click", function () {
    calculo_res = ""
    preview.innerHTML = ""
    primeiro_valor = ""
    tem_primeiro_valor = false
    segundo_valor = ""
    tem_segundo_valor = false
    sinal = ""
    resultado_final = ""
    display.innerHTML = ""
    tem_virgula = false
    tem_parentese = false
    colocar_parentese = ""
})

porcentagem.addEventListener("click", function () {
    if (primeiro_valor != "") {
        calculo_res = primeiro_valor / 100
        primeiro_valor = calculo_res
    }
    if (primeiro_valor != "" && segundo_valor != "" && sinal != "") {
        calculo_res = calculo_res / 100
    }
    preview.innerHTML = calculo_res
})

negativo.addEventListener("click", function () {
    if (primeiro_valor != "") {
        resultado_final = -primeiro_valor
        primeiro_valor = resultado_final
    }
    if (primeiro_valor != "" && segundo_valor != "" && sinal != "") {
        resultado_final = -resultado_final
    }
    display.innerHTML = resultado_final
})

virgula.addEventListener("click", function () {
    if (!tem_primeiro_valor && !tem_virgula) {
        primeiro_valor += "."
        display.innerHTML = primeiro_valor
    }

    if (primeiro_valor == "" && !tem_virgula) {
        primeiro_valor += "0."

        display.innerHTML = primeiro_valor
    }
    if (segundo_valor != "") {
        segundo_valor += "."
        display.innerHTML = segundo_valor
    }
    if (segundo_valor == "" && tem_primeiro_valor) {
        segundo_valor += "0."
        display.innerHTML = segundo_valor
    }

})

parentese.addEventListener("click", function () {
    if (!tem_primeiro_valor && tem_parentese) {
        colocar_parentese = "("
        display.innerHTML += colocar_parentese
    }

    if (segundo_valor != "") {
        colocar_parentese += ")"
        display.innerHTML += colocar_parentese
    }
    tem_parentese = true
})