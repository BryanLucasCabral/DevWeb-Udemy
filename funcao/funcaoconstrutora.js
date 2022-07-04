function carro (velocidade = 200, delta = 5){
    let velocidade = 0 //atributo privado

    this.acelerar = function () {
        if (velocidadeatual + delta <= velocidade){
            velocidadeatual += delta
        }else{
            velocidadeatual = velocidade
        }
    }

    this.getvelocidadeatual1 = function(){
        return velocidadeatual1
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getvelocidadeatual1())

const ferrari = new carro(350, 20)
ferrari.acelerar
console.log(ferrari.getvelocidadeatual1())