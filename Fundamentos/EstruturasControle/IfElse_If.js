Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}
const resultado = function (nota) {
    if(nota.entre(9, 10)) {
        console.log("Quadro de Honra")
    } else if (nota.entre(7, 8.99)) {
        console.log("Aprovado")
    } else if (nota.entre(4, 6.99)) {
        console.log("Recuperação")
    } else if (nota.entre(0, 3.99)) {
        console.log("Reprovado")
    } else {
        console.log("Parametro Invalido")
    }
}
resultado(9)
resultado(7)
resultado(5)
resultado(3)
resultado(11)
