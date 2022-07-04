let isativo = false
console.log(isativo)

isativo = true
console.log(isativo)

isativo = 1
console.log(!!isativo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!! -1)
console.log(!! " ")
console.log(!![])
console.log(!! Infinity)
console.log(!!(isativo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!! '')
console.log(!! '')
console.log(!! null)
console.log(!!NaN)
console.log(!!(isativo = false))

console.log('pra finalizar')
console.log(!!('' || null || 0 || ' '|| 123))

let nome1 = ''
console.log(nome1 || 'desconhecido')
let nome = 'lucas'
console.log(nome || 'desconhecido')