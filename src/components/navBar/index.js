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
                            <NavLink to={'/'} exact activeStyle={{color: 'white', padding: "4px 7px", background: 'blue', borderRadius: '3px', position: "static"}} ><span style={{padding: "4px 7px", background: 'grey', color: 'white', borderRadius: '3px'}}>1</span></NavLink> 
                            <NavLink to={'/'} exact activeStyle={{color: 'black'}} > Verify Account</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/social'} exact activeStyle={{color: 'white', padding: "4px 7px", marginRight: "2px", background: 'blue', borderRadius: '3px'}} ><span>2</span></NavLink> 
                            <NavLink to={'/social'} exact activeStyle={{color: 'black'}} >Social Handles</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/business'} exact activeStyle={{color: 'white', padding: "4px 7px", background: 'blue', borderRadius: '3px'}} ><span>3</span></NavLink> 
                            <NavLink to={'/business'} exact activeStyle={{color: 'black'}} >Business Category</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;