import { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"

function CriptoDetail() {

    const params = useParams() //Retorna parametros en url
    const URL = import.meta.env.VITE_APP_CRIPTO_URL
    const [cripto, setCripto] = useState()

  useEffect(() => {
    axios.get(`${URL}/assets/${params.id}`)
     .then((resp) => {setCripto(resp.data.data)})
     .catch((err) => {console.error(err)})
  }, [])

    

    return (
        <>
            <h1>Detalle de Criptomoneda {params.id}</h1>
            <p>{JSON.stringify(cripto)}</p>
        </>
    )
}

export default CriptoDetail