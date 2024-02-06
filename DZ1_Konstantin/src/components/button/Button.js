import React from 'react';

const Button = ({onClick, children}) => {

    const handleClick = () => {
        if (onClick) {
            onClick(children)
    }

    }
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    );
};

export default Button;