let dobro = function (a) {      //Função convencional(Utilizar RETURN)
    return 2 * a
}

dobro = (a) => {                //Função ARROW convencional(Utilizar RETURN)
    return 2 * a
}

dobro = a => 2 * a              //Função ARROW reduzida apenas com um parametro

let ola = function () {         //Função convencional(Utilizar RETURN)
    return 'Olá'
}

ola = () => 'Olá'               //Função ARROW sem parametro(OBRIGATORIO USO DE () )

ola _ => "Olá"                  //Função ARROW outra forma de declaração de parametro.
console.log(ola())
