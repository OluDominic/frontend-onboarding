import React, { useState } from 'react'
import Butt from '../forms/Butt';
import FormInput from '../forms/FormInput';
import FormSelect from '../forms/FormSelect';
import './index.scss'


const Account =()=> {

    const [bank, setBank] = useState('')

    return (
        <div className="accounto">
            <div className="account-sub">
                <div className="bankDetails">
                    <div className="acNu"><h3>Account Number</h3></div>
                    <div className="selBank"><h3>Select Bank</h3></div>
                </div>
                <div className="inp">
                    <div className="inpone"><div style={{width: "80%"}}><FormInput /></div></div>
                    <div  className="inptwo">
                        <FormSelect 
                        options={[
                            {
                                value: 'bank 1',
                                name: 'Bank 1'
                            },
                            {
                                value: 'bank 2',
                                name: 'Bank 2'
                            },
                            {
                                value: 'bank 3',
                                name: 'Bank 3'
                            },
                        ]}
                        />
                        </div>
                </div>
            </div>
            <br />
            <br />
            <hr className="social-line" />
            <div className="verify-butt"> <Butt>Continue</Butt> </div>
        </div>
    );
}

export default Account;