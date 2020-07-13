// Usando Classe na Função
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Valeria")
p1.falar()

// Usando Factory(Fabrica) na Função
const novaPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = novaPessoa("Mauro")
p2.falar()

// Função Construtora
function criarPessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new criarPessoa('Maurucio')
p3.falar()
