import React, { useEffect, useState } from 'react'
import Buttons from '../forms/Button';
import Bvn from '../forms/bvn';
import Butt from '../forms/Butt';
import './index.scss'
import Account from '../account';

const VerifyAccount =()=> {

    const [open, setOpen] = useState(true);
    const [openAcc, setOpenAcc] = useState(false);

    

    const openBut =(event)=> {
        setOpen(true)
        setOpenAcc(false)
    }

    const openAccount =(event)=> {
        setOpen(false)
        setOpenAcc(true)
    }

    return (
        <div className="verify">
            <h6>Step 1/3</h6>
            <h1>Verify Account</h1>
            <div className="verify-meth">
                <h3>Select a verification method</h3>
                <div className="verify-account">
                    <Buttons onClick={openBut}>BVN</Buttons>
                    <Buttons onClick={openAccount}>Personal Account Number</Buttons>
                </div>
                
                <br />
            </div>
            {open ? <Bvn /> : null}
            {openAcc ? <Account /> : null}
            
        </div>
    );
}

export default VerifyAccount;