// Factory Simples - Retorna um OBJETO
function novaPessoa() {
    return {
        nome: 'Marcos',
        sobrenome: 'Novelli'
    }
}
console.log(novaPessoa())

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Servidor', 11650.99))
