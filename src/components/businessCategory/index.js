import React from 'react'
import FormInput from '../forms/FormInput';
import { faFileImport, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import Buttons from '../forms/Button';
import Butt from '../forms/Butt';
import FormSelect from '../forms/FormSelect';

const BusinessCategory =()=> {


    return (
        <div className="businessCate">
            <h6>Step 3/3</h6>
            <h1>Business Category</h1>
            <div className="category">
                <div className="catType">
                    <div className="typeOfBusiness"><h3>Type of your business</h3></div>
                    <div className="busCat"><h3>Business Category</h3></div>
                </div>
                <div className="busInput">
                        <div className="forms-one"><div className="fors" style={{width: "80%"}}><FormSelect 
                        options={[
                            {
                                value: '',
                                name: ''
                            }
                        ]}
                        />
                        {/* <label className="labels"><FontAwesomeIcon icon={faPaperclip}/></label> */}
                        </div></div>
                        <div className="forms-two"><div className="bums" ><FormSelect
                        options={[
                            {
                                value: '',
                                name: ''
                            }
                        ]}
                        />
                        {/* <label className="labelss"><FontAwesomeIcon icon={faPaperclip}/></label> */}
                        </div>
                        <br />
                        <br />
                        </div>
                        
                    </div>
                    
                    <div className="business-posi">
                    <div className="marg"><h3>Do you use POS machines for your business?</h3>
                        <div className="yesNo">
                            <Buttons>Yes</Buttons>
                            <Buttons>No</Buttons>
                        </div>
                        </div>
                    </div>
                    <hr className="business-line" />
                <div className="confirm"> <Butt>Complete</Butt> </div>
            </div>
        </div>
    );
}

export default BusinessCategory;