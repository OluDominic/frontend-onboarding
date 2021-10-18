import React, { useState } from 'react'
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
                    <div className="inpone"><FormInput /></div>
                    <div className="inptwo">
                        <FormSelect 
                        options={[
                            {
                                value: '',
                                name: ''
                            }
                        ]}
                        />
                        </div>
                </div>
            </div>
            <br />
            <br />
            <hr className="social-line" />
        </div>
    );
}

export default Account;