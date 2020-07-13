const Carro = {
    VelAtaul: 0,
    velMax: 200,
    acelerarmais(delta) {
        if (this.VelAtaul + delta <= this.velMax) {
            this.VelAtaul += delta
        } else {
            this.VelAtaul = this.velMax
        }
    },
    status() {
        return `${this.VelAtaul} km/h de ${this.velMax} km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo} : ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, Carro)
Object.setPrototypeOf(volvo, Carro)

volvo.acelerarmais(180)
console.log(volvo.status())

ferrari.acelerarmais(312)
console.log(ferrari.status())

