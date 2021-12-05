import Content from "./Content/Content"
import "./HomePage.css"
import Navbar from "./Navbar"

export default function HomePage()
{
    return(
        <div className = "page home-page">
            <Navbar />
            <Content />
        </div>
    )
}