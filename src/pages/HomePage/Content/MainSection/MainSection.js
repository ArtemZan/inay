import { useState } from "react";
import { Button } from "../../../../Components";

function SlideShow() {
    const [mainImage, SetMainImage] = useState(0);

    const images = [];
    for (let i = 0; i < 5; i++) {
        images.push(<img
            key={i}
            src={"images/" + (i + 1) + ".png"}
            className={mainImage === i ? "selected-img" : ""}
            onClick={SetMainImage.bind(null, i)}
        ></img>
        );
    }

    return (
        <div className="slide-show">
            <img className="main-img" src={"images/" + (mainImage + 1) + ".png"}></img>
            <div className="images-nav">
                {images}
            </div>
        </div>
    )
}

function Info() {
    return (
        <div className="info">
            <header>Your child will adore this book!</header>

            <ul>
                <li>Nurture sibling relationships</li>
                <li>Wonderful illustrations!</li>
                <li>Big fonts for easy reading!</li>
                <li>Great gift for kids!</li>
            </ul>

            <span className="promotion">
                <Button primary rounded hoverable>Buy now for USD 15.99<br />and get BONUS Digital Copy!</Button>
                For every 2 books you purchase, we donate 1 book!
            </span>

            <span className="separator"></span>

            <p>
                ‘It’s Not About You’, is a gift for families to help nurture the challenges of sibling relationships through explaining the key points of Prince Circle’s story. Various shapes, words, and colors appear throughout the book making it easy for parents to point out and repeat elements to their child. Just wait for the excitement when your child replies, “Ball, Star, and Bean!”
            </p>
        </div>
    )
}

export default function MainSection() {
    return (
        <section className="main-section">
            <SlideShow />
            <Info />
        </section>
    )
}