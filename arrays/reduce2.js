const aluno = [
    {nome: 'joão', nota: 7.3, bolsista: false},
    {nome: 'maria', nota: 9.2, bolsista: true},
    {nome: 'pedro', nota: 9.8, bolsista: false},
    {nome: 'ana', nota: 8.7, bolsista: true}
]

const todosBolsista = (resultado, bolsistas) => resultado && bolsista
console.log(aluno.map(a => a.bolsista).reduce(todosBolsista))

const algumbolsista = (resultado, bolsista) => resultado || bolsista
console.log(aluno.map(a => a.bolsista).reduce(algumbolsista))