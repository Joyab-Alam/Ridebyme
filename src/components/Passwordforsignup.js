import React from 'react';
import './Passwordforsignup.css';

class ShowPassword extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      type: 'input'
    
    }
    this.showHide = this.showHide.bind(this);
    
  }
  
  showHide(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'password' ? 'input' : 'password'
    })  
  }
  
  
  
  render(){
    return(
        <>
      
      <div className="container">
            <div className="LoginForm">
                    <h1>You'll need a password too.</h1>
                    <div className="wrapper-input">
                      <input id="pass_input_rel" type={this.state.type} placeholder="Password (min. 8 characters)" name="Mobile"  autocorrect="off" />
                      <button class="show_hidebtn" onClick={this.showHide}>{this.state.type === 'input' ? '' : ''} <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ifAKCX cqcJrU" width="18" height="18" aria-hidden="true"><g fill="none" stroke="#708C91" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><g><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></g></g></svg></button>
                      <button class="show_hidebtn" onClick={this.showHide}>{this.state.type === 'input' ? '' : ''}    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ifAKCX cqcJrU" width="18" height="18" aria-hidden="true"><g fill="none" stroke="#708C91" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><g><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></g></g></svg></button>
                    </div>
                
                    
                </div>
               

               <a  href=''> <button id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Continue</button></a>
               
       </div>
      </>
      
    )
  }
}
export default ShowPassword;