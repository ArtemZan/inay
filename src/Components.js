import { useEffect, useRef, useState } from "react";

function Button({ content, children, className, hoverable, rounded, primary, secondary, onClick }) {
    if (hoverable) {
        className += " hoverable";
    }

    if (rounded) {
        className += " rounded";
    }

    if (primary) {
        className += " primary"
    }

    if (secondary) {
        className += " secondary";
    }

    if (!onClick instanceof Function) {
        console.warn("'Button' component must receive valid 'onClick' listenner");
        onClick = () => { };
    }

    return (
        <button onClick={onClick} className={"button" + (className ? " " + className : "")}>
            {content}
            {children}
        </button>
    )
}

function Link({ content, children, className, hoverable, rounded, primary, secondary, link, newTab }) {
    if (hoverable) {
        className += " hoverable";
    }

    if (rounded) {
        className += " rounded";
    }

    if (primary) {
        className += " primary"
    }

    if (secondary) {
        className += " secondary";
    }

    if (!link) {
        console.warn("'Link' component must receive valid 'link' property");
    }

    return (
        <a href={link} target={newTab ? "_blank" : "_self"} className={"link" + (className ? " " + className : "")}>
            {content}
            {children}
        </a>
    )
}

function Dropdown({ buttonContent, buttonProps, options }) {
    buttonProps = buttonProps || {};

    if (!(options instanceof Array)) {
        console.error("'Dropdown' component must receive 'options' property that is array");
        return null;
    }

    options = options.map((option, index) => <li key={index}>{option}</li>)

    return (
        <div className="dropdown">
            <Button {...buttonProps}>{buttonContent}</Button>

            <ul className="options">
                {options}
            </ul>
        </div>
    )
}

function Carousel({ cards, auto, period }) {
    const [offset, SetOffset] = useState(0);

    const offsetRef = useRef();
    offsetRef.current = offset;

    period = period || 2;

    const ref = useRef();

    function OnResize() {
        ref.current.style.transform = "translateX(" + -ref.current.children[offsetRef.current].getBoundingClientRect().width + "px)";
    }

    useEffect(() => {
        ref.current.style.transform = "translateX(" + -ref.current.children[0].getBoundingClientRect().width + "px)";
        window.addEventListener("resize", OnResize);

        //Simulate resize event to justify the carousel
        OnResize();

        let interval;
        if (auto) {
            interval = setInterval(Next, period * 1000)
        }

        return () => {
            document.removeEventListener("resize", OnResize);
            auto && clearTimeout(interval);
        }
    }, [])



    function Prev() {
        const card = (offset + cards.length - 1) % cards.length;
        const cardBefore = (offset + cards.length - 2) % cards.length

        const cardWidth = ref.current.children[card].getBoundingClientRect().width;
        const cardBeforeWidth = ref.current.children[cardBefore].getBoundingClientRect().width;

        SetOffset(card);
        ref.current.style.transition = "none";
        ref.current.style.transform = "translateX(" + (-cardWidth - cardBeforeWidth) + "px)";
        setTimeout(
            () => {
                ref.current.style.transition = "";
                ref.current.style.transform = "translateX(" + -cardBeforeWidth + "px)";
            }
        )
    }

    function Next() {
        const card = (offsetRef.current + 1) % cards.length;

        const cardWidth = ref.current.children[card].getBoundingClientRect().width;
        const currentCardWidth = ref.current.children[offsetRef.current].getBoundingClientRect().width;

        SetOffset(card);
        ref.current.style.transition = "none";
        ref.current.style.transform = "translateX(" + (cardWidth - currentCardWidth) + "px)";
        setTimeout(
            () => {
                ref.current.style.transition = "";
                ref.current.style.transform = "translateX(" + -currentCardWidth + "px)";
            }
        )
    }

    const wrappedCards = cards.map((card, index) => {
        let order = 2;

        if (index === (cards.length + offset - 1) % cards.length) {
            order = 0;
        }
        else if (index === offset) {
            order = 1;
        }

        return <div style={{ order }} className="card-wrapper" key={index}>{card}</div>
    });

    return (
        <div className="carousel">
            {!auto &&
                <Button onClick={Prev} className="prev">
                    <i className="fas fa-chevron-left"></i>
                </Button>
            }

            <div className="cards-wrapper">
                <div className="cards-container" ref={ref} style={{ width: (cards.length * 100) + '%' }}>
                    {wrappedCards}
                </div>
            </div>

            {!auto &&
                <Button onClick={Next} className="next">
                    <i className="fas fa-chevron-right"></i>
                </Button>
            }
        </div>
    )
}


export {
    Button, Dropdown, Link, Carousel
}