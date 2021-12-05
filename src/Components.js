
function Button({content, children, className, hoverable, rounded, primary, secondary})
{
    if(hoverable)
    {
        className += " hoverable";
    }

    if(rounded)
    {
        className += " rounded";
    }

    if(primary)
    {
        className += " primary"
    }

    if(secondary)
    {
        className += " secondary";
    }



    return(
        <button className = {"button" + (className ? " " + className : "")}>
            {content}
            {children}
        </button>
    )
}


export {
    Button
}