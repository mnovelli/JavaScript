function compras(trabalho1, trabalho2) {
    const sorvete = trabalho1 || trabalho1
    const tv50 = trabalho1 && trabalho2
    const tv32 = trabalho1 != trabalho2
    const suadavel = !sorvete   // operador unario
    return { sorvete, tv50, tv32, suadavel }
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
