import React, { Component } from "react";
import './Profile.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



export class Profile extends Component {
  state = {
    profileImg:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQ6I2RkZCI+PHBhdGggZmlsbD0iI0RERCIgZD0iTTAgMGg0OHY0OEgweiIvPjxwYXRoIGQ9Ik0yNCAyOWMyLjM3IDAgNS4yNC4yNDggNy42MTEuNzQ1IDMuODk5LjU0NCA2LjU4IDMuMTQzIDcuNzQgNy4wNzNDMzUuNjg1IDQxLjIwOCAzMC4xNjkgNDQgMjQgNDRjLTYuMTggMC0xMS43MDYtMi44MDMtMTUuMzc1LTcuMjA4IDEuMTA2LTMuNzk0IDMuNjgtNi4yMzcgNy43NjQtNy4wNDdDMTguNzU5IDI5LjI0OCAyMS42MjkgMjkgMjQgMjl6bTAtMjFhOCA4IDAgMDE4IDh2MmE4IDggMCAxMS0xNiAwdi0yYTggOCAwIDAxOC04eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="
  };
  imageHandler = e => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="page">
        <div className="container">
          <h1 >Edit Your Profile</h1>
          <div className="img-holder">
          <label className="image-upload" htmlFor="input">
            <img id='profile_img_icon' src={profileImg} alt=""  />
            </label>
          
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
              <button id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Save </button>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          
            
         
        </div>
      </div>
    );
  }
}

export default Profile;
