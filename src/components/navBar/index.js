import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './index.scss'



const NavBar =()=> {
    const [grey, setGrey] = useState(true);

    const greyLink = {
        padding: "5px 11px",
        color: "#A5B4CB",
        background: "#E4E9EF",
        fontFamily: "sans-serif",
        marginRight: "7.5px",
        borderRadius: "3px"
    }

    const blueLink = {
        padding: "5px 11px",
        color: "white",
        background: "#006AFF",
        fontFamily: "sans-serif",
        marginRight: "7.5px",
        borderRadius: "3px"
    }

    const changeColor=()=> {
        setGrey(!grey)
    }

    return(

        <div className="navi">
            <nav>
                <div className="nav-sub">
                    <ul>
                        <li>
                            <NavLink className="activeOne" to={'/'} exact 
                            activeStyle={{color: 'white', padding: "5px 11px", background: '#006AFF', borderRadius: '3px', marginRight: '7.5px'}}  
                            ><span className="one" >1</span></NavLink> 
                            <span className="navbar-hidden"><NavLink to={'/'} exact activeStyle={{color: 'black'}} > Verify Account</NavLink></span>
                        </li>
                        <li>
                            <NavLink className="activeTwo" to={'/social'} exact 
                            activeStyle={{color: 'white', padding: "5px 7.5px", marginRight: "7.5px", background: '#006AFF', borderRadius: '3px'}} 
                            ><span className="two">2</span>&nbsp;</NavLink> 
                            <span className="navbar-hidden"><NavLink to={'/social'} exact activeStyle={{color: 'black'}} >Social Handles</NavLink></span>
                        </li>
                        <li>
                            <NavLink className="activeThree" to={'/business'} exact 
                           activeStyle={{color: 'white', padding: "5px 7.5px", background: '#006AFF', borderRadius: '3px', marginRight: '7.5px'}} 
                            ><label className="three">3</label>&nbsp;</NavLink> 
                            <span className="navbar-hidden"><NavLink to={'/business'} exact activeStyle={{color: 'black'}} >Business Category</NavLink></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

