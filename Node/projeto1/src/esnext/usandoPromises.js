// Refatorando com PROMISE
const http = require('http')
const { resolve } = require('path')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, resp => {
        let resultado = ''

        resp.on('data', dados => {
            resultado += dados
        })
        resp.on('end', () => {
            try {
                resolve(JSON.parse(resultado))
            } catch(e) {
                reject(e)
            }
        })
    })
    
  })
}

// Usando CALLBACK
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})

// Usando PROMISE
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message)) // Tratando ERRO

getTurma('D').catch(e => console.log(e.message))
