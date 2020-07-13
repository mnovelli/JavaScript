function aleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
// Execulta primeiro a repetição depois a verificação(expressão)
do {       
    opcao = aleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)
console.log("Até a próxima !!")
