const peso1 = 1.0
const peso2 = ('2.0')

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(total.toFixed(2)) // fixa a quantidade de casas decimais.
console.log(media.toFixed(2))

// Execultando o objeto MATH

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area.toFixed(2))