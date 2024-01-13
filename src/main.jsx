import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from "./App.jsx"
import Home from "./Home.jsx"
import Lista from './Lista.jsx'
import CriptoDetail from './CriptoDetail.jsx'
//import Saludo from './Saludo.jsx'
import Page404 from './Page404.jsx'
import './main.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
            </Route>
            <Route path='/criptomonedas' element={<App />}>
                <Route index element={<Lista />} />
                <Route path=":id" element={<CriptoDetail />} />
            </Route>
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>
)
