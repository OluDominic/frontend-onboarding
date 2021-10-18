import React from 'react';
import './index.scss';

const Butt =({ children, ...otherProps })=> {

    return (
            <button className="butt" {...otherProps}>
                {children}
            </button>
    );
}

export default Butt;