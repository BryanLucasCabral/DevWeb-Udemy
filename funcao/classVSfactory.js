class pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é: ${this.nome}`)
    }
}

const p1 = new pessoa('joão')
p1.falar()

const criarpessoa = Nome => { 
    return{ 
        falar: ()=> console.log(`meu nome é ${this.Nome}`)
    }
}
const p2 = criarpessoa('joão')
p2.falar()