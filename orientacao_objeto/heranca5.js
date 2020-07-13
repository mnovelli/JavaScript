function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bom Dia!', 1)
const aula2 = new Aula('Até Breve', 2)
console.log(aula1, aula2)
