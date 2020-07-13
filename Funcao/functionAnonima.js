const soma = function (x, y) {
    return x * y
}

const resultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

resultado(9, 8)                 //Parametro da função SOMA

resultado(6, 8, function (x, y) {       // Função dentro de Função
    return x + y
})

resultado(4, 9, (x, y) => x / y)        //Função mais função ARROW
