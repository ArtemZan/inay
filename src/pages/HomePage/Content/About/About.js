import { Button } from "../../../../Components"
import "./About.css"

export default function About()
{
    return(
        <div className="about">
                <header>
                    About the book
                </header>

                <div>

                    <div className="info">
                        <header>
                            “It's not about you!” by Antonia Tan
                        </header>

                        <p>
                            A picture book that fosters harmonious relationships between siblings in a fun and adorable story!

                            A project which sat on Antonia's bookshelf for three and a half years! Life gets busy, as you know!

                            One day, her own cheeky eight-month-old son reached up and pulled it off the shelf. Good boy! And this inspired his mama to dust it off, polish it up and make it available to all the children in the world.

                            And the parents too, of course, because happy kids - blissful parents!
                        </p>
                    </div>

                    <div className="image-and-button">
                        <img src="images/About.png"></img>

                        <Button primary rounded hoverable>Buy now for USD 15.99<br />and get BONUS Digital Copy!</Button>
                        <span className="promotion">For every 2 books you purchase, we donate 1 book!</span>
                    </div>
                </div>
            </div>
    )
}