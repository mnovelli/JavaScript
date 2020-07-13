function Pessoa() {
    this.idade = 8
    
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)         //Usando Bind
}

new Pessoa

function Pessoa1() {
    this.idade = 8
    
    const self = this           //Armazenando THIS
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)         
}

new Pessoa1
