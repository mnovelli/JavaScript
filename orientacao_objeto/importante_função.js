const pessoa = {
    nome: 'Valeria',
    idade: 72,
    peso: 80
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: "12/04/1947"
})
console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript)
const dest = { a: 1 }
const ob1 = { b: 2 }
const ob2 = { c: 3, a: 4}
const obj = Object.assign(dest, ob1, ob2)

Object.freeze(obj)
console.log(obj)
