import React from "react";
import ReactDOM from "react-dom/client";
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const App = () =>{
    return(<h1>HOLA</h1>)
}

const container = document.getElementById("root")

const root = ReactDOM.createRoot(container)

root.render(<App />)