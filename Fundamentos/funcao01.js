// Função se retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}
imprimirSoma(5, 8)


// Função com retorno
function soma(a, b = 0) {
    return a + b
}
console.log(soma(10, 18))


// Armazenar um função em uma variavel
const imprimirSoma1 = function (a, b) {
    console.log(a + b)
}
imprimirSoma1(19, 65)

// Armazenamento uma função arrow em uma variavel
const soma1 = (a, b) => {
    return a + b
}
console.log(soma1(9, 8))

// Retorno implicito
const subtracao = (x, y) => x - y
console.log(subtracao(50, 80))
