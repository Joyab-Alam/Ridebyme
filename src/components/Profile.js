import React, { Component } from "react";
import './Profile.css';

import 'react-datepicker/dist/react-datepicker.css';
import ProfileImg from "./ProfileImg";




export class Profile extends Component {
  
 
  
  render() {
   
   
    return (
        
      <div className="page">
        <div className="container">
          <h1 >Edit Your Profile</h1>
          <div className="img-holder">
          <ProfileImg/>
          
          </div>
          <div class="wrapper-input"><input type="text" placeholder="First Name" name="name" autocorrect="off"/></div>
            <div class="wrapper-input"><input type="text" placeholder="Last Name" name="name" autocorrect="off"/></div>
            <div className="dob_gender">
             <div class="wrapper-input"><input type="text" placeholder="DOB-DD/MM/YYYY" name="age" autocorrect="off"/></div>
              <div class="wrapper-input"><input type="text" placeholder="Gender" name="age" autocorrect="off"/></div>
              </div>
              <div class="wrapper-input"><input type="text" placeholder="Address" name="address" autocorrect="off"/></div>
             <div className="dob_gender">
             <div class="wrapper-input"><input type="text" placeholder="Pin Code" name="number" autocorrect="off"/></div>
              <div class="wrapper-input"><input type="text" placeholder="Adhar Number" name="number" autocorrect="off"/></div>
              </div>
              <a href='/'><button   id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Save </button></a>
         
          
            
         
        </div>
      </div>
    );
  }
}

export default Profile;
