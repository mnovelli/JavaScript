const alunos = [
    { nome: 'Mauro', nota: 9.8, bolsista: false },
    { nome: 'Valeria', nota: 7.3, bolsista: true },
    { nome: 'Marcos', nota: 8.6, bolsista: false },
    { nome: 'Mauricio', nota: 9.2, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)

// Implementando REDUCE
Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for (let i = 1; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6, 7]
console.log(nums.reduce2(soma))
