import React from 'react'
import Header from '../../components/header'

const MainLayout =(props)=> {
    
    return (
        <div>
            <Header {...props}/>
                <div className="mainLay">
                    {props.children}
                </div>
        </div>
    );
}

export default MainLayout;