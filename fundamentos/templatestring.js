const nome = 'bryan'
const concatenacao = 'ola '+ nome +'!'
const template = `
ola ${nome}!`
console.log(concatenacao, template)
//expressões..
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.touppercase('ola')
console.log(`ei...${up('cuidado')}`)