// Operadores ...REST(JUNTAR) - ...SPRED(ESPALHAR)
// Usar SPRED com Objeto
const funcionario = { nome: 'Marcos', salario: 12520.99 }
const clone = { ativo: true, ...funcionario}
console.log(clone)

// Usar SPRED em Array
const grupoA = ['Marcos', 'Mauro', 'Mauricio']
const grupoFinal = ['Valeria', 'Willian', 'Lucas', ...grupoA]
console.log(grupoFinal)

// Operador REST com Objeto
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(3, 5, 7, 9))