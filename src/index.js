import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter } from "react-router-dom";
import App from './views/App'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,
    document.getElementById('root')
)