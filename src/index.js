import React from "react";
import ReactDOM from "react-dom/client";
import "/src/styles.css";


const App = () =>{

    const [valor_1, setValor_1] = React.useState("")
    const [expresion, setExpresion] = React.useState("")
    const [operacion, setOperacion] = React.useState("")
    const [resultado, setResultado] = React.useState("")
    const [secuencia, setSecuencia] = React.useState(false)
    const botones = ["C", "+/-", "MOD", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=", "DEL"]
    const numeros = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]

    const operaciones = () =>{
        var valor1 = Number(valor_1)
        var valor2 = Number(expresion)
        var nuevo_resultado = ""

        if(operacion === "+"){
            var nuevo_resultado = valor1 + valor2         
        }
        else if(operacion === "-"){
            var nuevo_resultado = valor1 - valor2  
        }
        else if(operacion === "x"){
            var nuevo_resultado = valor1 * valor2  
        }
        else if(operacion === "÷"){
            var nuevo_resultado = valor1 / valor2

        }
        else if(operacion === "MOD"){
            var nuevo_resultado = valor1 % valor2
        }

        console.log(nuevo_resultado)
        if(nuevo_resultado <= 999999999 && nuevo_resultado >= 0){
            setValor_1("")
            var resultado_final = nuevo_resultado.toString().substring(0, 9)
            setResultado(resultado_final)
            setExpresion(resultado_final)   
        }
        else{
            setValor_1("")
            setResultado("ERROR")
            setExpresion("ERROR")   
        }
    }

    return(
        <div className="app">
            <div className="calculadora">
                <div className="pantalla_resultados">{expresion}</div>
                <div className="botones_calculadora">
                {
                    botones.map((elemento, posicion) =>{
                        if(numeros.includes(elemento)){
                            return <button 
                            className="numero" 
                            key={posicion.toString()}
                            onClick={
                                () =>{
                                    if(resultado !== ""){
                                        var expresion_nueva = ""
                                        expresion_nueva = elemento
                                        if(expresion_nueva.length !== 10){
                                            setExpresion(expresion_nueva)
                                        }
                                        setResultado("")
                                    }
                                    else{
                                        var expresion_nueva = ""
                                        expresion_nueva = expresion + elemento
                                        if(expresion_nueva.length !== 10){
                                            setExpresion(expresion_nueva)
                                        }
                                    }
                                }
                            }>{elemento}</button>
                        }
                        else{
                            return <button 
                            className="boton" 
                            key={posicion.toString()}
                            onClick={
                                () =>{
                                    if(elemento === "+" || elemento === "-" || elemento === "x" || elemento === "÷" || elemento === "MOD"){
                                        setValor_1(expresion)
                                        setExpresion("")
                                        setOperacion(elemento)
                                    }
                                    else if(elemento === "."){
                                        var expresion_nueva = ""
                                        if(!expresion.includes(".")){
                                            expresion_nueva = expresion + elemento
                                            if(expresion_nueva.length !== 10 ){
                                                setExpresion(expresion_nueva)
                                            }
                                        }
                                    }
                                    else if(elemento === "DEL"){
                                        var expresion_nueva = expresion.slice(0, -1)
                                        setExpresion(expresion_nueva)
                                    }
                                    else if(elemento === "C"){
                                        setExpresion("")
                                    }
                                    else if(elemento === "="){
                                        operaciones()
                                    }
                                    
                                }
                            }>{elemento}</button>
                        }
                    })
                }
                </div>
            </div>
        </div>
    )
}

const container = document.getElementById("root")

const root = ReactDOM.createRoot(container)

root.render(<App />)