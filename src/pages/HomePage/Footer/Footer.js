export default function Footer() {
    return (
        <div className="footer">
            <div className="links">
                <a link="/about-the-book">About the book</a>
                <a link="/reviews">Reviews</a>
                <a link="/about-the-author">About the author</a>
                <a link="/mission">Little Kind Book’s Mission</a>
            </div>

            <div className = "copyright-section">
                <img src="images/logo.png">
                </img>

                <div className="copyright">
                    © 2020
                </div>
            </div>
        </div>
    )
}