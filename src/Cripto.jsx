import { Link } from 'react-router-dom'
import "./Cripto.css"

function Cripto ({id, name, price, code, variation24Hr}) {

    return (
        <div className="cripto">
            <h3>{name}</h3>
            <div className="info">
                <p><span className="label">Precio: </span>$ {parseFloat(price).toFixed(3)}</p>
                <p><span className="label">Codigo: </span>{code}</p>
                <p>
                    <span className="label">Variacion 24hrs:</span>
                    <span className={ (variation24Hr > 0) ? "increment" : "decrement" }>
                        {parseFloat(variation24Hr).toFixed(3)}%
                    </span>
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Cripto