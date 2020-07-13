const produtos = [
    { nome: 'Notebook', preço: 2499.99, fragil: true },
    { nome: 'iPad Pro', preço: 4199.99, fragil: true },
    { nome: 'Memoria', preço: 240.99, fragil: true },
    { nome: 'SSD', preço: 153.65, fragil: true }
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preço >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

// Iplementar o FILTER
Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos1 = [
    { nome: 'Notebook', preço: 2499.99, fragil: true },
    { nome: 'iPad Pro', preço: 4199.99, fragil: true },
    { nome: 'Memoria', preço: 240.99, fragil: true },
    { nome: 'SSD', preço: 153.65, fragil: true }
]

const maiscaro = produto => produto.preço >= 500
const muitofragil = produto => produto.fragil

console.log(produtos1.filter2(maiscaro).filter2(muitofragil))
