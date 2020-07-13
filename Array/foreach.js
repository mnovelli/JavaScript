const aprovados = ['Marcos', 'Valeria', 'Mauro', 'Mauricio']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const Aprovados1 = aprovado => console.log(aprovado)
aprovados.forEach(Aprovados1)

// Parte 2
Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) // Passando valor atual, indice, parametro
    }
}

const aprovados2 = ['Marcos', 'Valeria', 'Mauro', 'Mauricio']

aprovados2.forEach2(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})
