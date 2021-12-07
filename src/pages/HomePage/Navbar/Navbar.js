import { Dropdown } from "../../../Components"
import "./Navbar.css"

export default function Navbar() {
    return <div className="navbar">
        <div className="logo">
            <img src="images/logo.png"></img>
        </div>

        <div className="links">
            <a href="/about-the-book">About the book</a>
            <a href="/reviews">Reviews</a>
            <a href="/about-the-author">About the author</a>
            <a href="/mission">Little Kind Book’s Mission</a>
        </div>

        <Dropdown options = {[
            <a href="/about-the-book">About the book</a>,
            <a href="/reviews">Reviews</a>,
            <a href="/about-the-author">About the author</a>,
            <a href="/mission">Little Kind Book’s Mission</a>
        ]} buttonContent = {<i className = "fas fa-bars"></i>}>

        </Dropdown>
    </div>
}