const carro = {
    modelo: 'S30',
    valor: 115000,
    proprietario: {
        nome: 'Marcos',
        idade: 45,
        endereco: {
            logradouro: 'Rua sem saida',
            numero: 10
        }
    }, 
    consutores: [{
        nome: 'Mauro',
        idade: 76
    }, {
        nome: 'Mauricio',
        idade: 41
    }]
}
console.log(carro)
console.log(carro.consutores)