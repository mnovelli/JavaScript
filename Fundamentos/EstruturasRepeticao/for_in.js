// Utilizar for in em um OBJETO(Este Exemplo)
const pessoa = {
    nome: 'Marcos',
    sobrenome: 'Novelli',
    idade: 45,
    peso: 110
}

for(atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
