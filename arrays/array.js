let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'carlos','ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'rafael'
console.log(aprovados.length)
console.log(aprovados[8] == undefined)

console.log(aprovados)
//metodo alteradora de arryas para ordenação
aprovados.sort()
console.log(aprovados)

//função para deletar elementos de um array
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//metodo para excluir e deletar elementos do array
aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1,1)
console.log(aprovados)