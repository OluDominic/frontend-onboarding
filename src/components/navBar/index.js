import React from 'react'
import { NavLink } from 'react-router-dom';
import './index.scss'

const NavBar =()=> {

    return(

        <div className="navi">
            <nav>
                <div className="nav-sub">
                    <ul>
                        <li>
                            <NavLink to={'/'} exact 
                            // activeStyle={{color: 'white', padding: "5px 11px", background: '#006AFF', borderRadius: '3px', marginRight: '4px',}} 
                            ><span className="one">1</span></NavLink> 
                            <span className="navbar-hidden"><NavLink to={'/'} exact activeStyle={{color: 'black'}} > Verify Account</NavLink></span>
                        </li>
                        <li>
                            <NavLink to={'/social'} exact 
                            // activeStyle={{color: 'white', padding: "5px 11px", marginRight: "10px", background: '#006AFF', borderRadius: '3px',}} 
                            ><span className="two">2</span>&nbsp;</NavLink> 
                            <span className="navbar-hidden"><NavLink to={'/social'} exact activeStyle={{color: 'black'}} >Social Handles</NavLink></span>
                        </li>
                        <li>
                            <NavLink to={'/business'} exact 
                           // activeStyle={{color: 'white', padding: "5px 11px", background: '#006AFF', borderRadius: '3px', marginRight: '10px'}} 
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