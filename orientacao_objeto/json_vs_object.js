const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) // Passando para o formato JSON

// Formatdo para JSON - Gerar um Objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3 }'))
