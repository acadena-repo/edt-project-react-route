import noPageFound from "./static/404_page.webp"
import "./Page404.css"

function Page404 () {

    return (
        <div className="no-found-container">
            <img src={noPageFound} alt="404" />
        </div>
    )
}

export default Page404