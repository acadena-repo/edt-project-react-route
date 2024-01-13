import { Link } from "react-router-dom"
import cripto from "./static/crypto.jpg"

function Home() {

    return (
        <>
            <h1>Bienvenido a Criptomarket</h1>
            <p>Conoce las 100 criptomonedas mas usadas</p>
            <Link to="/criptomonedas">Ver Criptomonedas</Link>
            <div className="img-container">
                <img src={cripto} alt="criptomonedas" />
            </div>
        </>
    )
}

export default Home