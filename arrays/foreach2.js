Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['a', 'b', 'c','d']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`) 
})