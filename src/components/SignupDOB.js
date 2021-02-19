import React from 'react';
import './SignupDOB';

const SignupDOB =() =>{
    return(
        <>
            <div className="container">
            <div className="LoginForm">
                    <h1>What's your date of birth?</h1>
                    <div className="wrapper-input">
                     <input type="text" placeholder="DD/MM/YYYY" name="birthdate" maxlength="10" autocorrect="off" title="Enter your date of birth here. Please use the format day slash month slash year" />
                    </div>
                  
                </div>
              
                
                <a href="registergender"><button id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Continue</button></a>
               
       </div>
        </>
    )
}
export default SignupDOB;