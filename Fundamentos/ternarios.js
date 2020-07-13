const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

// Outro modo de execultar
const res = nt => {
    return nt >= 6 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(6.5))
console.log(resultado(7.2))
console.log(res(5.9))
console.log(res(7.6))
