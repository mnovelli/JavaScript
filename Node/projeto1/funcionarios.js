const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = func => func.pais === 'China'
const mulheres = func => func.genero === 'F'
const menorSalario = (fun, fAtual) => {
    return fun.salario < fAtual.salario ? fun : fAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    console.log(func)
})
