import React from 'react';
import './EnterDetails.css';


const EnterDeatils =() =>{
    return(
        <>
      <div className="container">
            <div className="LoginForm">
                    <h1>So what's your name?</h1>
                    <div className="wrapper-input">
                      <input type="text" placeholder="First Name" name="Mobile" autocorrect="off" />
                    </div>
                    <div className="wrapper-input">
                      <input type="password" placeholder="Last Name" name="password" autocorrect="off" />
                    </div>
                    
                </div>
             
                
                <a href='/signupdob'><button id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Continue</button></a>
               
       </div>
        </>
    )
}
export default EnterDeatils;