import React from 'react'
import Button from '../forms/Buttons';
import NavBar from '../navBar';
import './index.scss'

const Header =()=> {
    
    return (

        <div>
            <header>
                <NavBar />
                <Button>Logout</Button>
                <hr className="hr"/>
            </header>
        </div>
    );
}

export default Header;