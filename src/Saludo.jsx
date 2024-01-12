import welcome from "./static/welcome_page.webp"
import "./Saludo.css"

function Saludo() {

    return(
        <div className="container">
            <img src={welcome} alt="greetings" />
        </div>
    )
}

export default Saludo