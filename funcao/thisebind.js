const pessoa = {
    suadacao: ' bom dia',
    falar(){
        console.log(this.suadacao)
    }   
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa()