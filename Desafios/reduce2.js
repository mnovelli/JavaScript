const alunos = [
    { nome: 'Mauro', nota: 9.8, bolsista: false },
    { nome: 'Valeria', nota: 7.3, bolsista: true },
    { nome: 'Marcos', nota: 8.6, bolsista: false },
    { nome: 'Mauricio', nota: 9.2, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsista?
const tdBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(tdBolsista))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
