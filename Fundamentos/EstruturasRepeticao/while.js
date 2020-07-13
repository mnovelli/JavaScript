function aleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao = 0
// A expressão tem que ser verdadeira
while (opcao != -1) {       
    opcao = aleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}
console.log("Até a próxima !!")
