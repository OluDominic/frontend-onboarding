import { faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import FormInput from '../FormInput';import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import './index.scss'
import Butt from '../Butt';

const Bvn =()=> {

    const [open, setOpen] = useState(true);

    const onBar =()=> {
        setOpen(!open)
    }

    return (
        <div className="bvn-all">
            <h3>Bank Verification Number (11-digits)</h3>
            <FormInput />
            <div>
            <div style={{transform : open ? "scaleY(1)" : "scaleY(1)"}} className="bvn-sub">
                <div className="bvn-icons">
                    <span className="lock"><FontAwesomeIcon icon={faLock}/> </span>
                    <div className="bvn-h"><h3>Why we need your BVN</h3></div>
                    <span className="flexEnd"><i onClick={onBar} className={open ? 'show fas fa-angle-up' : 'fas fa-angle-down'}></i></span>
                </div>
                
                <TransitionGroup>
                    <CSSTransition timeout={500} classNames="fade">
                        <div style={{transform : open ? "scale(0)" : "scale(1)"}}>
                <div className="fonts">
                <div className="access"><h5>We only need access to your:</h5></div>
                <div className="bvn-font">
                    <div className="fullname">
                        <span className="check"><FontAwesomeIcon icon={faCheck} /></span>
                        <span className="bvn-fullname"><h5>Fullname</h5></span>
                    </div>
                    <div className="phonenumber">
                        <span className="check"><FontAwesomeIcon icon={faCheck} /></span>
                        <span className="bvn-fullname"><h5>Phone Number</h5></span>
                    </div>
                    <div className="dob">
                        <span className="check"><FontAwesomeIcon icon={faCheck} /></span>
                        <span className="bvn-fullname"><h5>Date of Birth</h5></span>
                    </div>
                </div>
                <hr className="bvn-ln" />
                <div className="bvn-lock">
                    <span className="faLock"><FontAwesomeIcon icon={faLock} /></span>
                    <div className="faLockWord"><h3>Your BVN does not give us access to your bank accounts or transactions.</h3></div>
                </div>
                </div>
                <hr className="bvn-ln" />
                <div className="verify-butt"> <Butt>Continue</Butt> </div>
            
            </div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            </div>
        </div>
    );
}

export default Bvn;