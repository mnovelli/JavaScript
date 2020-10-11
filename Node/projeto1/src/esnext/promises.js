// Usando o RESOLVE
function falar(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falar(3, 'Muito Legal')
.then(frase => frase.concat('!!'))
.then(outraFrase => console.log(outraFrase))

// Usando o REJECT
function falar1(segundos, frases) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frases)
        }, segundos * 1000)
    })
}

falar1(3, 'Falha de Comunicação com o Servidor')
.then(frases => frases.concat('!!'))
.then(outraFrase => console.log(outraFrase))
.catch(mensagem => console.log(mensagem))
