const fabricante = ['mercedez', 'audi', 'bmw']

function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`)
}

fabricante.forEach(imprimir)
fabricante.forEach(function(fabricante){
    console.log(fabricante)
})