

export default function TabButton({children, onSelect, isSelected}){
    // Vanilla JS
    // document.querySelector('button').addEventListener('click',() => {})

    // as React developers we want to avoid using Vanilla JS and we don't want to deal with the DOM directly
    // pass onSelect function as value to onClick (built-in prop) of the button element
    return(
        <li>
            <button className={isSelected? "active":undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}