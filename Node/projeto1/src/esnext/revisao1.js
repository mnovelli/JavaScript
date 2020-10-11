// let e const
{
    var a = 2   // Escopo de FUNÇÂO ou GLOBAL
    let b = 3   // Escopo de Bloco
}

// Template String
const produto = 'Samsung'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Mncti"
console.log(l, e, tras)

const { idade, nome } = { nome: 'Marcos', idade: 45}
console.log(idade, nome)

// Arrow Function
const soma = (a, b) => a + b
console.log(soma(6, 8))

// Arrow Function (THIS)
const lexico = () => console.log(this === module.exports)
lexico()

// Parametro DEFAULT(PADRÃO)
function Log(texto = 'Node') {
    console.log(texto)
}
Log()

// Operador REST
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(3, 5, 7, 9))

// ES8 - Object.values & Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal de OBJETOS
const nome = 'Valeria'
const pessoa = {
    nome,
    ola() {
        return 'Bem Vindo!'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Usando CLASS
class Animal {}
class cachorro extends Animal {
    falar() {
        return 'AUAU!'
    }
}
console.log(new cachorro().falar())




