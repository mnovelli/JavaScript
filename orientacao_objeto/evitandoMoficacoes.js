// Object.prevetExtensions - Não pode atribuir objetos, mas pode modificar e excluir
const produto = Object.preventExtensions({
    nome: "Marcos", preco: 2.55, tag: "Promoção"
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Caneta'
produto.descricao = 'Caneta Azul'
delete produto.tag
console.log(produto)

// Object.seal(Selar) - Não adciona, não exclui atributo, mas consegue modificar o atributo
const pessoa = { nome: "Juliana", idade: 36 }
Object.seal(pessoa)
console.log("Selado:", Object.isSealed(pessoa))

pessoa.sobrenome = 'Maria'
delete pessoa.nome
pessoa.idade = 26
console.log(pessoa)

// Object.freeze - Não adiciona, não exclui e não modofica o atributo
