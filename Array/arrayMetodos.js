const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do ARRAY
pilotos.push('Verstapen') // adiciona o ultimo elemento ao ARRAY
pilotos.shift() // remove o primeiro elemento do ARRAY
pilotos.unshift('Hamilton') // adiciona o primeiro elemento do Array

// splice pode adicionar e remover elementos do ARRAY
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')

// remover
pilotos.splice(3, 1)
console.log(pilotos)

// slice cria um novo ARRAY
const pilotos1 = pilotos.slice(2)
console.log(pilotos1)

const pilotos2 = pilotos.slice(1, 4)
console.log(pilotos2)


