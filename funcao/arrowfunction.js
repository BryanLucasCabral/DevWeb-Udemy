let dobro = function(a){
    return 2 * a
}

dobro = (a) =>{
    return 2 * a
}
//se tiver só um parametro pode ser sem os " () "
dobro = a => 2*a

console.log(dobro(Math.PI))

let ola = function(){
    return 'olá'
}

ola = () => 'ola'
ola = _ => 'ola'

console.log(ola())