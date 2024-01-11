import "./Cripto.css"

function Cripto ({name, price}) {

    return (
        <div className="cripto">
            <h3>{name}</h3>
            <div className="info">
                <p><span className="label">Precio: $</span>{price}</p>
            </div>
        </div>
    )
}

export default Cripto