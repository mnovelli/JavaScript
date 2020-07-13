const alunos = [
    { nome: 'Marcos', nota: 7.9 },
    { nome: 'Mauricio', nota: 9.2 }
]

// IMPERATIVO
let total1 = 0
for (let n = 0; n < alunos.length; n++) {
    total1 += alunos[n].nota
}
console.log(total1 / alunos.length)

// DECLARATIVO
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
