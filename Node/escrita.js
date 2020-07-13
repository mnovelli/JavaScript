const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1250.99,
    desconto: 0.16
}

fs.writeFile(__dirname + '/aqruivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo !')
})