import React from "react";
import ReactDOM from "react-dom/client";
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const App = () =>{

    const [valor_1, setValor_1] = React.useState("")
    const [valor_2, setValor_2] = React.useState("")
    const [resultado, setResultado] = React.useState("")
    const botones = ["C", "+/-", "%", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="]

    const calculadora_estilo = css `
        display: grid;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        grid-template-columns: repeat(${4}, 100px);
        grid-template-rows: repeat(${5}, 100px);
    `

    const boton_estilo = css`
        height: 100px;
        width: 100px;
        color: black;
    `

    console.log(botones)

    return(
        <div className="app">
            <div className="calculadora" css = {calculadora_estilo}>
            {
                botones.map((elemento, posicion) =>{
                    return <p key={posicion.toString()} css = {boton_estilo}>{elemento}</p>
                })
            }
            </div>
        </div>
    )
}

const container = document.getElementById("root")

const root = ReactDOM.createRoot(container)

root.render(<App />)