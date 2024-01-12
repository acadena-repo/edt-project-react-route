import { NavLink } from "react-router-dom"
import "./Menu.css"

function Menu() {
    
    return(
        <nav className="main-menu">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="saludo">Welcome</NavLink></li>
        </ul>
    </nav>
    )
}

export default Menu