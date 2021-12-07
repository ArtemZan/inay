import "./Author.css";

function Card({ title, text, image, reversed, children, background }) {
    const textEl = <p>
        {text}
        {children}
    </p>

    const imageEl = <img src={"images/author/" + image}>
    </img>

    let content = <>
        {textEl}

        {imageEl}
    </>

    if (reversed) {
        content = <>
            {imageEl}

            {textEl}
        </>
    }

    return (
        <div style = {{background}} className = "author-card">
            {title ? <header>{title}</header> : ""}

            {content}
        </div>
    )
}

export default function Author() {
    return (
        <section className = "about-author">
            <Card background = "var(--light-blue)" title="About the Author" image="1.png">
                Antonia Bio
                <br /><br />
                Antonia is a brave and courageous girl, she is!
                And when it comes to writing stories, well, she’s a wiz.
                <br /><br />
                She married a quadriplegic, then tried to start a family,
                It took a five-year journey of IVF till she got to hold her little baby!
                <br /><br />
                Antonia was born and raised in beautiful Singapore,
                A lush and vibrant place, with ideas for her stories, galore.
            </Card>

            <Card image="2.png" reversed>
                Through her eyes and touch, she loves to communicate with others. She especially loves to support and connect with other mothers.
                <br /><br />
                She writes in her very own special quirky style,
                Of which she hopes will inspire you and make you smile.
                <br /><br />
                When it comes to her dreams, Antonia is driven
                By wanting to share the gifts and love that she has been given.
            </Card>

            <Card background = "var(--light-pink)" image="3.png">
                So she started a project that encourages young kids to start giving,
                Believing that helping others is an important part of living.
                <br /><br />
                With every two books purchased one book is donated
                To needy children where they are truly appreciated.
                <br /><br />
                Antonia invites you to help her nurture each little kind soul,
                To grow into giant kind souls - this is her goal!
            </Card>
        </section>
    )
}