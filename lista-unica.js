const clientes = [{
    nome: "Andre",
    idade: 36,
    cpf: "123456789",
    email:"andre@email.com",
    fones:["5599413448","5559974684"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    },
    {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }],
},
{
    nome: "Juliana",
    cpf: "545585468826",
    dependentes: [{
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020"
    }],
}
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)