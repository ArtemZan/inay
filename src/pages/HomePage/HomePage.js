import Content from "./Content/Content"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

export default function HomePage()
{
    return(
        <div className = "page home-page">
            <Navbar />
            <Content />
            <Footer />
        </div>
    )
}