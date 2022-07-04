const aprovados = ['a', 'b', 'c','d']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`) 
    console.log(aprovados)
})

aprovados.forEach(nome => console.log(nome))

const exibiraprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibiraprovados)