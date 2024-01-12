import { Outlet } from "react-router-dom"
import Menu from "./menu/Menu"

// Template Component
// <Outlet /> sera reemplazado por el componente especificado como "element" en <Route />
function App() {

    return (
        <>
            <Menu />
            <Outlet />
        </>
    )
}

export default App