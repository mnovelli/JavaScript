const pessoa = {
    saudacao: 'Boa Noite',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const podeFalar = pessoa.falar.bind(pessoa)
podeFalar() // Acessando o comando THIS atraves do BIND
