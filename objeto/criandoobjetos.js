//usando a notação literal
const obj1 = {}
console.log(obj1)

//object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras
function produto (nome, preco, desconto){
    this.nome = nome 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new produto('caneta', 7.99, 0.15)
const p2 = new produto('notebook', 2999.3, 0.15)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('joão', 7990, 4)
const f2 = criarFuncionario('maria', 5000, 1)
console.log(f1.getSalario(), f2.getSalario())

//object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//função famosa que retorna um objeto
/*const fromJSON = JSON.parse('{"info":"sou um JSON"')
console.log(fromJSON.info)*/