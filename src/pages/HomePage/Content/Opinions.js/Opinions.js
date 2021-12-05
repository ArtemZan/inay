import { Button } from "../../../../Components";
import "./Opinions.css";

function Quote({ quote, author, background }) {
    return (
        <div style={{ background }} className="quote-card">
            <span />

            <p className="quote">
                {quote}
            </p>

            <p className="author">
                {author}
            </p>

            <div className="stars">

                <i className="fas">&#xf005;</i>
                <i className="fas">&#xf005;</i>
                <i className="fas">&#xf005;</i>
                <i className="fas">&#xf005;</i>
                <i className="fas">&#xf005;</i>
            </div>
        </div>
    )
}

export default function Opinions() {
    return (
        <div className = "opinions">
            <header>
                What people say?
            </header>

            <div className="quotes">

                <Quote background="var(--logo)" author="ryan roldan" quote="My daughter really liked the book, she is now constantly drawing the Prince." />
                <Quote background="var(--pink)" author="NINA STELMAH" quote="Nice book, my child and I love the stoty and illustrations. We read it often before bed." />
                <Quote background="var(--orange)" author="LISA NORMAN" quote="This story is similar to mine. My sons behave this way ... the book will suit them." />
            </div>

            <Button rounded hoverable secondary>Leave a review</Button>
        </div>
    )
}