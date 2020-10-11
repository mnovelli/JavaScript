// NÃO ACEITA REPETIÇÃO - NÃO É INDEXADA
const times = new Set()
times.add('Corinthians').add('Sao Paulo').add('Palmeiras').add('Santos')

console.log(times)
console.log(times.size)
console.log(times.has('Corinthians')) // HAS testa se existe

const nomes = ['Marcos', 'Mauro', 'Mauricio', 'Valeria', 'Marcos']
const nomesSet = new Set(nomes)
console.log(nomesSet)
