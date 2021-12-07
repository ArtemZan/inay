import { useState } from "react";
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
    let [offset, SetOffset] = useState(0);

    function Prev() {
        if (offset === 0) {
            SetOffset(2);
            return;
        }

        SetOffset(offset - 1);
    }

    function Next() {
        if (offset === 2) {
            SetOffset(0);
            return 0;
        }

        SetOffset(offset + 1);
    }

    return (
        <div className="opinions">
            <header>
                What people say?
            </header>

            <div className="quotes-wrapper">
                <Button onClick={Prev} className="prev">
                    <i className="fas fa-chevron-left"></i>
                </Button>

                <div className="quotes-inner-wrapper">
                    <div className="quotes" style={{ left: -offset * (window.innerWidth * 0.9 - 80) + "px" }}>
                        <Quote background="var(--logo)" author="ryan roldan" quote="My daughter really liked the book, she is now constantly drawing the Prince." />
                        <Quote background="var(--pink)" author="NINA STELMAH" quote="Nice book, my child and I love the stoty and illustrations. We read it often before bed." />
                        <Quote background="var(--orange)" author="LISA NORMAN" quote="This story is similar to mine. My sons behave this way ... the book will suit them." />
                    </div>
                </div>

                <Button onClick={Next} className="next">
                    <i className="fas fa-chevron-right"></i>
                </Button>
            </div>


            <Button rounded hoverable secondary>Leave a review</Button>
        </div>
    )
}