let comaparacomthis = function (param){
    console.log(this === param)
}

comaparacomthis(global)

const obj = {}
comaparacomthis = comaparacomthis.bind(obj)
comaparacomthis(global)
comaparacomthis(obj)

let comaparacomthisarrow = param => console.log(this === param)
comaparacomthisarrow(global)
comaparacomthisarrow(module.exports)

comaparacomthisarrow = comaparacomthisarrow.bind(obj)
comaparacomthisarrow(obj)
comaparacomthisarrow(module.exports)