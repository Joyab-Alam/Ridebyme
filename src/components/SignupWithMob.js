import React from 'react';
import './SignupWithMob';



const SignupWithMob =() =>{
   
    
    return(
        <>
       <div className="container">
            <div className="LoginForm">
                    <h1>Enter your Mobile Number ?</h1>
                    <div className="wrapper-input">
                      <input type="tel" placeholder="Enter Mobile Number" name="Mobile" autocorrect="off" />
                    </div>
                   
                    
                </div>
                <p class="pt-xl"><span class="sc-htoDjs sc-hqyNC cPtbgo">When I'm subscribed, I can opt out anytime by contacting Company Name or via the link in the newsletter.</span></p>

               <a  href='/enterdetails'> <button id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Continue</button></a>
               
       </div>
        </>
    )
}
export default SignupWithMob;
