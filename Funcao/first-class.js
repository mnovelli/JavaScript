// Função em JS
// criar de forma literal
function fun1() {}

// armazenar em uma variavel (função anonima)
const fun2 = function () {}

// armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](6, 8))

// armazenar em atributo de objeto
const obj = {}
obj.falar = function () {return "Olá"}
console.log(obj.falar())

// uma função pode retornar/conter uma outra função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(5, 9)(8)
const somar = soma(5, 9)
somar(8)


