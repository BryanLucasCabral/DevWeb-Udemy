//pessoa ---> 123
const pessoa ={nome: 'joão'}
pessoa.nome = 'pedro'
console.log(pessoa)

//pessoa --> 321 -->{...}
//pessoa = {nome:'ana'}

Object.freeze(pessoa)
pessoa.nome = 'maria'
console.log(pessoa.nome)