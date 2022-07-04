//factory simples retorna um objeto a partir da chamada de função

function criarProduto(nome, preco){
    return {
        nome, 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('teclado', 122.33))
console.log(criarProduto('monitor', 122.33))