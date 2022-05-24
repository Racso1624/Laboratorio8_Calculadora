
const operaciones = (operacion, valor1, valor2) =>{
    if(operacion === "+"){
        var resultado = valor1 + valor2         
    }
    else if(operacion === "-"){
        var resultado = valor1 - valor2  
    }
    else if(operacion === "x"){
        var resultado = valor1 * valor2  
    }
    else if(operacion === "÷"){
        var resultado = valor1 / valor2
    }
    else if(operacion === "MOD"){
        var resultado = valor1 % valor2
    }
}

export { operaciones }