const calculo_res = document.querySelector("#calculo_res")
let teste = document.getElementById("#teste")
calculo_res.innerHTML = "1233"
teste.value = "1233"
// let teste = document.q
const preview = document.querySelector(".preview ")
const apagar = document.querySelector("#apagar")
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
let resultado_final = ''

function receberPrimeiroValor(valor) {
    if (tem_primeiro_valor == false) {
        preview.innerHTML = ""
        primeiro_valor += valor.target.value
        preview.innerHTML = primeiro_valor
        primeiro_valor = +primeiro_valor
    }

    if (tem_primeiro_valor == true) {
        preview.innerHTML = "" 
        segundo_valor += valor.target.value
        preview.innerHTML = segundo_valor
        segundo_valor = +segundo_valor
    }
}

function receberSinal(sinal){
    sinal = sinal.target.value
    tem_primeiro_valor = true
    tem_virgula = false
}



// igual.addEventListener("click", function () {
//     switch (igual) {
//         case (sinal == "+"):
//             resultado_final = parsefloat(primeiro_valor) + parsefloat(segundo_valor)
            
//             break;
//         case (sinal == "-"):
//             resultado_final = parsefloat(primeiro_valor) - parsefloat(segundo_valor)
            
//             break;
//         case (sinal == "÷"):
//             resultado_final = parsefloat(primeiro_valor) / parsefloat(segundo_valor)
            
//             break;
//         case (sinal == "x"):
//             resultado_final = parsefloat(primeiro_valor) * parsefloat(segundo_valor)
            
//             break;
//         default:
//             break;
//     }
//     preview.innerHTML = resultado_final
// })

// apagar.addEventListener("click", function () {
    
// })

// limpar.addEventListener("click", function () {
//     limpar.innerHTML = "C"
//     preview.innerHTML = ""
//     primeiro_valor = ""
//     tem_primeiro_valor = false
//     segundo_valor = ""
//     tem_segundo_valor = false
//     sinal = ""
//     resultado_final = ""
// })

// porcentagem.addEventListener("click", function() {
//     if (primeiro_valor != "") {
//         preview = primeiro_valor / 100
//         primeiro_valor = preview
//     }
//     if (primeiro_valor != "" && segundo_valor != "" && sinal != "" ) {
//         preview = preview / 100
//     }
//     preview.innerHTML = preview
// })

// negativo.addEventListener("click", function() {
//     if (primeiro_valor != "") {
//         preview = -primeiro_valor
//         primeiro_valor = preview
//     }
//     if (primeiro_valor != "" && segundo_valor != "" && sinal != "") {
//         preview = -preview
//     } 
//     preview.innerHTML = preview
// })

// virgula.addEventListener("click", function() {
    
// } )