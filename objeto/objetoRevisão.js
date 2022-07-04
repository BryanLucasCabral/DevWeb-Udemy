//coleção dinamica para chaves e valor
const produto = new Object 
produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    idade: 56,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}