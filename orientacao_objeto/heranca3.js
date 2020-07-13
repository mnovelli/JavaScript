function MeuObjeto() {}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

MeuObjeto.prototype.nome = 'Mauro'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia ! Meu nome é ${this.nome} !`)
}

obj1.falar()

obj2.nome = 'Marcos'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Mauricio'
obj3.falar()
