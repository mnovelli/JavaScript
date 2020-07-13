const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Ler arquivo de forma sincrona...Apenas para arquivos pequenos.
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Ler arquivo de forma assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host} : ${config.db.port}`)
})

// Ler arquivo JSON
const config = require('./arquivo.json')
console.log(config.db)

// Ler uma pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da Pasta.....')
    console.log(arquivos)
})
