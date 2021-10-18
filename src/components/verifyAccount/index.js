import React from 'react'
import Buttons from '../forms/Button';
import Bvn from '../forms/bvn';
import './index.scss'

const VerifyAccount =()=> {


    return (
        <div className="verify">
            <h6>Step 1/3</h6>
            <h1>Verify Account</h1>
            <div className="verify-meth">
                <h3>Select a verification method</h3>
                <div className="verify-account">
                    <Buttons>BVN</Buttons>
                    <Buttons>Personal Account Number</Buttons>
                </div>
            </div>
            <Bvn />
        </div>
    );
}

export default VerifyAccount;