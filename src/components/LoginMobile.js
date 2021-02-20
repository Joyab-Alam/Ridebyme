import React, { useState} from 'react';
import './LoginMobile.css';




const LoginWithMobile =() =>{
  const [show, setShow]= useState(false)
  const [btnshow, btnsetShow]= useState(true)
    return(
        <>
       <div className="container">
            <div className="LoginForm">
                    {btnshow?<h1>Enter your Mobile Number?</h1>:null}
                    {show?<h1>Enter OTP send to your Mobile?</h1>:null}
                     {btnshow?<div className="wrapper-input">
                     <input  type="tel" placeholder="Enter Mobile Number" name="Mobile" autocorrect="off" />
                    </div>:null}
                    {show? <div className="wrapper-input">
                      <input type="text" placeholder="Enter OTP" name="otp" autocorrect="off" />
                    </div>:null}
                    
                </div>
               {/* <div className="remember_pass">
                 <a class="kirk-item kirk-item--highlighted kirk-item--clickable sc-cvbbAY kNumBt" href="/forgotpass"><span class="kirk-item-leftWrapper"><span class="kirk-item-leftText"><span class="kirk-text kirk-text-title sc-gzVnrw hMBsDE">Forgot password</span></span></span></a>
               </div> */}
                
                {btnshow?
                <a  onClick={()=>btnsetShow(false)}><button  onClick={()=>setShow(true)} id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Genrate OTP</button></a>:null}
                <a href="/"> {show?<button  id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Continue</button>:null}</a>
               
       </div>
        </>
    )
}
export default  LoginWithMobile;
