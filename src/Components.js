
function Button({content, children, className, hoverable, rounded, primary, secondary, onClick})
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

    if(!onClick instanceof Function)
    {
        console.warn("'Button' component must receive valid 'onClick' listenner");
        onClick = () => {};
    }

    return(
        <button onClick = {onClick} className = {"button" + (className ? " " + className : "")}>
            {content}
            {children}
        </button>
    )
}

function Dropdown({buttonContent, buttonProps, options})
{
    buttonProps = buttonProps || {};

    if(!(options instanceof Array)){
        console.error("'Dropdown' component must receive 'options' property that is array");
        return null;
    }

    options = options.map((option, index) => <li key = {index}>{option}</li>)

    return(
        <div className = "dropdown">
            <Button {...buttonProps}>{buttonContent}</Button>

            <ul className = "options">
                {options}
            </ul>
        </div>
    )
}


export {
    Button, Dropdown
}