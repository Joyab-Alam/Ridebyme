import React from 'react';
import './ForgotPass.css';


const ForgotPass =() =>{
    return(
        <>  
         <div className="container">
            <div className="LoginForm">
                    <h1>Enter your Register Mobile Number to get otp</h1>
                    <div className="wrapper-input">
                      <input type="tel" placeholder="Enter Mobile Number" name="Mobile" autocorrect="off" />
                    </div>
                   
                    
                </div>
               
                
                <button id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">GET OTP</button>
               
       </div>
 
        </>


    )
}
export default ForgotPass;
