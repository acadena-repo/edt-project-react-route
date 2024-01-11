import { useState, useEffect } from 'react'
import loading from "../public/Loading.gif"

function App() {

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
     .then((resp) => resp.json())
     .then((data) => {setCriptos(data.data)})
     .catch(() => {console.error("La peticion fallo")})
  }, [])

  // Loader
  if (!criptos) return <img src={loading} alt='Cargando ....' />


  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        { criptos.map(({name, priceUsd}) => (
          <li key={name}>Nombre {name} con un precio de: ${priceUsd}</li>
        ))}
      </ol>
    </>
  )
}

export default App
