function getpreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto) }`
}
const produto = {
    nome: 'notebook',
    preco: 4567,
    desc: 0.15,
    getpreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getpreco())
console.log(produto.getpreco())

const carro = {preco: 4000, desc: 0.20}

console.log(getpreco.call(carro))
console.log(getpreco.apply(carro))

console.log(getpreco.call(carro, 0.17, '$'))
console.log(getpreco.apply(global, [0.17, '$']))