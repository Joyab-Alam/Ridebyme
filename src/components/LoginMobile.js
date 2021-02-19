import React from 'react';
import './LoginMobile.css';



const LoginWithMobile =() =>{
   
    
    return(
        <>
       <div className="container">
            <div className="LoginForm">
                    <h1>Enter your Mobile Number & password?</h1>
                    <div className="wrapper-input">
                      <input type="tel" placeholder="Enter Mobile Number" name="Mobile" autocorrect="off" />
                    </div>
                    <div className="wrapper-input">
                      <input type="password" placeholder="Enter Password" name="password" autocorrect="off" />
                    </div>
                    
                </div>
               <div className="remember_pass">
                 <a class="kirk-item kirk-item--highlighted kirk-item--clickable sc-cvbbAY kNumBt" href="/forgotpass"><span class="kirk-item-leftWrapper"><span class="kirk-item-leftText"><span class="kirk-text kirk-text-title sc-gzVnrw hMBsDE">Forgot password</span></span></span></a>
               </div>
                
                <button id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Login</button>
               
       </div>
        </>
    )
}
export default  LoginWithMobile;
