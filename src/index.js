import React from "react";
import ReactDOM from "react-dom/client";
import "/src/styles.css";


const App = () =>{

    const [valor_1, setValor_1] = React.useState("")
    const [valor_2, setValor_2] = React.useState("")
    const [expresion, setExpresion] = React.useState("")
    const [resultado, setResultado] = React.useState("")
    const botones = ["C", "+/-", "MOD", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=", "DEL"]
    const numeros = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]

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
                                    var expresion_nueva = ""
                                    expresion_nueva = expresion + elemento
                                    if(expresion_nueva.length !== 10){
                                        setExpresion(expresion_nueva)
                                    }

                                }
                            }>{elemento}</button>
                        }
                        else{
                            return <button className="boton" key={posicion.toString()}>{elemento}</button>
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