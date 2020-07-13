function carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado apenas para essa FUNÇÃO
    let velocidadeAtual = 0

    // Metodo Publico (Usar THIS para tornar Publico)
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo Publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro 
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const camaro = new carro(250, 20)
camaro.acelerar()
console.log(camaro.getVelocidadeAtual())
