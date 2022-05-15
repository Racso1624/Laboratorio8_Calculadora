import React from "react";
import ReactDOM from "react-dom/client";
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const App = () =>{

    const [valor_1, setValor_1] = React.useState("")
    const [valor_2, setValor_2] = React.useState("")
    const [resultado, setResultado] = React.useState("")
    const botones = ["C", "+/-", "MOD", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "=", "DEL"]
    const numeros = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"]

    const calculadora_estilo = css`\
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    `

    const botones_calculadora_estilo = css `
        display: grid;
        grid-template-columns: repeat(${4}, 100px);
        grid-template-rows: repeat(${5}, 100px);
    `

    const pantalla_resultados_estilo = css`
        height: 100px;
        width: 400px;
        border-style: solid;
        border-color: white;
        border-width: 1px;
        background-color: black;

    `

    const boton_estilo = css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
        border-style: solid;
        border-color: black;
        border-width: 1px;
        font-size: 1.5em;
        font-family: 'Roboto', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100px;
        color: white;
        background-color: #9c27b0;
    `

    const numeros_estilo = css`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
        border-style: solid;
        border-color: black;
        border-width: 1px;
        font-family: 'Roboto', sans-serif;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        width: 100px;
        color: white;
        background-color: #8bc34a
    `


    return(
        <div className="app">
            <div className="calculadora" css = {calculadora_estilo}>
                <div className="pantalla_resultados" css = {pantalla_resultados_estilo}></div>
                <div className="botones_calculadora" css = {botones_calculadora_estilo}>
                {
                    botones.map((elemento, posicion) =>{
                        if(numeros.includes(elemento)){
                            return <button key={posicion.toString()} css = {boton_estilo}>{elemento}</button>
                        }
                        else{
                            return <button key={posicion.toString()} css = {numeros_estilo}>{elemento}</button>
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