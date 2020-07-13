// Criar Objeto - object.create
const filha = Object.create(null)
filha.nome = 'Jessica'
console.log(filha)

// Objeto com JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
