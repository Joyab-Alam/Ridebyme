import React from 'react'

const SignUp = () =>{
    return(
        <div>
           <div>
            <div className="container">
                <div className="LoginForm">
                    <h1>How do you want to sign up?</h1>
                    <div className="loginwith">
                        <div className="LoginWithFb">
                            <div id="loginwithfacebook">
                                <div className="LoginCOntent">Continue with Facebook</div>
                               <div className="loginparent">
                                    <div className="facebookIcon">
                                   <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-bwzfXH gDXded" width="24" height="24" aria-hidden="true"><path fill="#4267B2" d="M22 0H2C.895 0 0 .895 0 2v20c0 1.105.895 2 2 2h11v-9h-3v-4h3V8.413c0-3.1 1.893-4.788 4.66-4.788 1.324 0 2.462.1 2.794.143v3.24h-1.918c-1.504 0-1.795.716-1.795 1.764V11h4.44l-1 4h-3.44v9H22c1.105 0 2-.895 2-2V2c0-1.105-.895-2-2-2z"></path></svg>
                                </div>
                                <div className="iconarrow"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-bwzfXH gpfbbh" width="24" height="24" aria-hidden="true"><polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline></svg></div>
                            </div>
                               </div>
                        </div>
                    </div>
                  <div className="forlinehr"> <hr/></div>
                </div>
               
                    <div className="loginwith">
                        <div className="LoginWithFb">
                            <div id="loginwithfacebook">
                                <div className="LoginCOntent">Continue with email</div>
                               <div className="loginparent">
                                   
                                <div className="iconarrow"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-bwzfXH gpfbbh" width="24" height="24" aria-hidden="true"><polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline></svg></div>
                            </div>
                               </div>
                        </div>
                    </div>
            </div>
            <div className="container newsignup"><p>Already a member? <a href="">Log in</a></p></div>
            
        </div>
        </div>
    )
}
export default SignUp;