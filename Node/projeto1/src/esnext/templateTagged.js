// TAGGED TEMPLATES - Processa o Template dentro de uma função
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 159
const precoParcela = 20
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)