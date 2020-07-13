const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(dinheiro)
console.log(resultado)

// Iplementar o MAP
Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapiz", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado1 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado1)

