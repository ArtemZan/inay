import { Button } from "../../../Components";
import MainSection from "./MainSection/MainSection";
import About from "./About/About";
import Opinions from "./Opinions/Opinions";
import Author from "./Author/Author";

import "./Content.css"

function GoodThing({ img, title, text, reverse }) {
    let content = <div>
        <header>{title}</header>
        <p>{text}</p>
    </div>
    return (
        <div className={"good-thing" + (reverse ? " with-bg" : "")}>
            {reverse ? content : ""}
            <img src={"images/good_things/" + img}></img>
            {reverse ? "" : content}
        </div>
    )
}

export default function Content() {
    return (
        <div className="content">
            <MainSection />

            <div className="quote">
                <img src="./images/Kids.png"></img>
                <p>
                    “My eldest daughter was often jealous of my younger son, but this book helped me explain that her brother is the dearest person to her.”
                </p>
            </div>

            <div className="good-things">
                <header>What useful and good things can you find in the book?</header>

                <GoodThing img="1.png" reverse title="Inspire to love." text="“It’s Not About You” will inspire and encourage your child to love and enjoy the blessings of having siblings!" />
                <GoodThing img="2.png" title="Funny plot" text="Watch what happens when older sibling, Prince Circle gets up to all sorts of cute mischief in order to get ahead of his little brother." />
                <GoodThing img="3.png" reverse title="Wholly and Holy" text="Every kid needs a magic bean! Wholly Bean is here to help - by injecting courage and magic to rekindle the love and affection between Prince Circle and Little Diamond." />
                <GoodThing img="4.png" title="Cushy Cover" text="Rounded corners and padded covers means no more tears from torn and smudged pages, or spiky edges. Hardboard quality pages are durable and encourage the practice of fine motor skills such as the pinching motion." />
            </div>

            <div className="ad">
                <header>
                    For every 2 books you purchase, we donate 1 book!
                </header>

                <Button primary rounded hoverable>
                    "Buy now for USD 15.99 <br /> and get BONUS Digital Copy!"
                </Button>
            </div>

            <About />

            <Opinions />

            <Author />

            <div className="mission">
                <header>
                    Little Kind Book’s Mission
                </header>

                <p>
                    Little Kind Book’s mission is to encourage parents to provide their little ones with the opportunity to not only read, touch, and feel physical books but to interact with them too.
                    Studies show over and over that it is the interaction with content that cements the learning.
                    <br /><br />
                    Holding a physical book and reading printed materials also allows your kids to exercise their fingers which comes naturally as they enjoy and become amused by the story. Learning new shapes and emotions in a fun way encourages your child to reach out and touch what they are seeing. You can help your little one along, guiding their fingers to trace the shapes and point to the colors.
                    <br /><br />
                    It has been shown that when a child and parent read books together, their bond increases - through close contact and affections, eye contact, and laughter. These experiences are sure to create a lifelong love of books.
                </p>
            </div>

            <img id="elephants" src="images/Elephants.png" />

            <div className="ad">
                <header>
                    Grab a digital copy for your little one just for USD3.99
                </header>

                <Button primary rounded hoverable>
                    Buy now for USD3.99
                </Button>
            </div>

            <div className="footer">
                <div className="links">
                    <a link="/about-the-book">About the book</a>
                    <a link="/reviews">Reviews</a>
                    <a link="/about-the-author">About the author</a>
                    <a link="/mission">Little Kind Book’s Mission</a>
                </div>

                <img src="images/logo.png">
                </img>

                <div className="copyright">
                    © 2020
                </div>
            </div>
        </div>
    )
}