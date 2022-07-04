function imprimirSoma(a, b) {
    console.log(a + b)
}
console.log(imprimirSoma(2,4))

imprimirSoma(2, 3)
imprimirSoma(2, null)
imprimirSoma(2, 10, 4, 4, 4)
imprimirSoma()

function soma (a, b = 0){
    return a + b
}

console.log(soma(2,3))
