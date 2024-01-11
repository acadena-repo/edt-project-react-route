import { useState, useEffect } from 'react'
import axios from "axios"
import Cripto from './Cripto'
import loading from "../public/Loading.gif"
import './App.css'

function App() {

  const [criptos, setCriptos] = useState()
  const URL = import.meta.env.VITE_APP_CRIPTO_URL

  useEffect(() => {
    axios.get(`${URL}/assets`)
     .then((resp) => {setCriptos(resp.data.data)})
     .catch(() => {console.error("La peticion fallo")})
  }, [])

  // Loader
  if (!criptos) return <img src={loading} alt='Cargando ....' />


  return (
    <div className='app-container'>
      <h1>Lista de Criptomonedas</h1>
      <div className='cripto-container'>
        { criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
          <Cripto key={id} 
          name={name} 
          price={priceUsd} 
          code={symbol} 
          variation24Hr={changePercent24Hr}
          />
        ))}
      </div>
    </div>
  )
}

export default App
