import { useState } from "react";
import { Button } from "../../../../Components";

import "./MainSection.css"

function SlideShow() {
    const imagesUrls = ["Antonia1.png", "Antonia2.png", "Baby1.png", "Baby2.png", "Card.png"]
    const [mainImage, SetMainImage] = useState(0);

    const images = imagesUrls.map((url, index) => <img
        key={index}
        src={"images/" + url}
        className={mainImage === index ? "selected-img" : ""}
        onClick={SetMainImage.bind(null, index)}
    ></img>
    );

    return (
        <div className="slide-show">
            <img className="main-img" src={"images/" + imagesUrls[mainImage]}></img>
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

            <Button primary rounded hoverable>Buy now for USD 15.99<br />and get BONUS Digital Copy!</Button>
            <span className = "promotion">For every 2 books you purchase, we donate 1 book!</span>

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