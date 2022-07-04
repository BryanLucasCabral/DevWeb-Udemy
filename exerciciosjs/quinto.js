function retornavalor(valordecimal){
    valoremreais = `R$ ${valordecimal.toFixed(2).toString().replace(",", ".") }`
    console.log(valoremreais)
}

retornavalor(0.1 + 0.2)
    
