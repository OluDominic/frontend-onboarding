import React from 'react';
import './index.scss';

const Buttons =({ children, ...otherProps })=> {

    return (
            <button className="btns" {...otherProps}>
                {children}
            </button>
    );
}

export default Buttons;