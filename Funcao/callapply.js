function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}
const produto = {
    nome: "Servidor",
    preco: 10598.32,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

// Usando CALL / APPLY da Função
const carro = { preco: 7589.99, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Passando paremetro para o CALL
console.log(getPreco.call(carro, 0.17, '$'))

// Passando parametro para o APPLY
console.log(getPreco.apply(global, [0.17, '$']))
