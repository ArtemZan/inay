import Content from "./Content/Content"
import "./HomePage.css"
import Navbar from "./Navbar/Navbar"

export default function HomePage()
{
    return(
        <div className = "page home-page">
            <Navbar />
            <Content />
        </div>
    )
}