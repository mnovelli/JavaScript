// Novo recurso de ES2015 - Desestruturar a partir de um Objeto

const pessoa = {
    nome: 'Marcos',
    idade: '45',
    endereco: {
        logradouro: 'Av. Agenor Couto de Magalhães',
        numero: '310'
    }
}

const { nome, idade } = pessoa  // Isso é desestruturar, retirar as variaveis do escopo
console.log(nome, idade)

const { endereco: { logradouro, numero}} = pessoa
console.log(logradouro, numero)
