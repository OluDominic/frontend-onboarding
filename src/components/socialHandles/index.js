import { faFileImport, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Butt from '../forms/Butt';
import FormInput from '../forms/FormInput';
import './index.scss'

const SocialHandles =()=> {



    return (
        <div className="socialHandles">
            <h6>Step 2/3</h6>
            <h1>Social Handles</h1>
            <h4>Enter your business social media handles</h4>
            <br />
            <br />
            <h3>Choose your Abeg Tag (required)</h3>
            <div>
                <div className="first" ><FormInput 
                type="text"
                placeHolder="@"
                />
                {/* <label className="label"><FontAwesomeIcon icon={faPaperclip}/></label> */}
                </div>
                <div className="social-sub">
                    <div className="instaTwit">
                    <div className="instagram"><h3>Instagram</h3></div>
                    <div className="twitter"><h3>Twitter</h3></div>
                    </div>
                    <div className="instaInput">
                        <div className="form-one"><div className="for" style={{width: "80%"}}><FormInput 
                        type="text"
                        placeHolder="@"
                        />
                        {/* <label className="labels"><FontAwesomeIcon icon={faPaperclip}/></label> */}
                        </div></div>
                        <div className="form-two"><div className="bum" ><FormInput 
                        type="text"
                        placeHolder="@"
                        />
                        {/* <label className="labelss"><FontAwesomeIcon icon={faPaperclip}/></label> */}
                        </div></div>
                    </div>
                    
                </div>
                <hr className="social-line" />
                <div className="confirm"> <Butt>Confirm Social Handles</Butt> </div>
            </div>
        </div>
    );
}

export default SocialHandles;