function classicatriangulo (lado1,lado2,lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return 'equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'isósceles'
    } else{
        return 'escaleno'
    }
}

console.log(classicatriangulo(2,2,3))
console.log(classicatriangulo(1,1,1))
console.log(classicatriangulo(3,5,7))