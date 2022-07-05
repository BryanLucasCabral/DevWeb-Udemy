const produtos  = [ 
    {nome: 'notebook', preco: 2499, fragil:true},
    {nome: 'ipad', preco: 2334, fragil:true},
    {nome: 'copo de vidro', preco: 12.45, fragil:true},
    {nome: 'copo de plastico', preco: 14.54, fragil:false}
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))