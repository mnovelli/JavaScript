const resultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log("Quadro de Honra, Parabens")
            break   //OBRIGATORIO
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default:
            console.log("Parametro inválido !!")
    }
}
resultado(9.2)
resultado(7.5)
resultado(5.5)
resultado(3.1)
resultado(11)
