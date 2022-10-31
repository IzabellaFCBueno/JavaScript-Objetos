const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email:"andre@email.com",
    fones:["5599413448","5559974684"]

}

cliente.dependente = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

console.log(cliente)

cliente.dependente.nome = "Sara Silva"
console.log(cliente)