class Pessoa {
    constructor(nome, sobrenome, cpf, email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }
    exibirNomeCompleto(){
        console.log(` ${this.nome} ${this.sobrenome}`)
    }
}

class Programador extends Pessoa{
    constructor(nome, sobrenome, cpf, email, linguagem){
        super(nome, sobrenome, cpf, email)
        this.linguagem = linguagem
    }
}

const novoDev = new Programador("André", "Silva","5555555555","andre@email.com","Javascript")

console.log(novoDev)