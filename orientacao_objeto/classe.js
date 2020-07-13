class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }

    addLancamentos(...Lancamentos) {
        Lancamentos.forEach(l => this.Lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.Lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 25000)
const contaDeLuz = new Lancamento('Luz', -250)
const contaDeAgua = new Lancamento('Agua', -130)

const contas = new CicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz, contaDeAgua)
console.log(contas.sumario())
