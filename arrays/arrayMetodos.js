const pilotos = ['vettel', 'alonso', 'raike', 'massa']
pilotos.pop() //metodo para remover o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstap')//adiciona um elemento no final do array
console.log(pilotos)

pilotos.shift() //metodo para remover o primeiro elemento de um array
console.log(pilotos)

pilotos.unshift('hamilto') //adiciona no primeiro elemento do array

//adicionar
pilotos.splice(2, 0, 'botas', 'massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)//novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)