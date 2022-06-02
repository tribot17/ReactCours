import React from 'react';

const Element = (eazeaz) => {
    console.log(eazeaz);
    const element = document.querySelector("h1")

    const handleClick = () => {
        console.log("salut");
    }

    const changeColor = () => {
        element.style.color = "red";
    }
    
    return (
        <div onClick={handleClick}>
            <h1 onClick={changeColor}>Salut</h1>
        </div>
    );
};

export default Element;

