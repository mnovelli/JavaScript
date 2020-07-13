const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem CALLBACK
const notasBaixas = []
for (let n in notas) {
    if (notas[n] < 7) {
        notasBaixas.push(notas[n])
    }
}
console.log(notasBaixas)

// Com CALLBACK
 const notasBaixas1 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas1)

// CALLBACK com ARROW
const notasMenor = nota => nota < 7
const notasBaixas2 = notas.filter(notasMenor)
console.log(notasBaixas2)
