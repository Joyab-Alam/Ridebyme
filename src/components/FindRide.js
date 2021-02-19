import React, { useState } from 'react';
import './FindRide.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




const FindRide = () => {
     const [num, setNum] = useState(1);
     const incNum = () =>{
         if(num<10){
         setNum(num+1)
         }
         else{
             setNum(10);
         }
     }
     const decNum = () =>{
         if(num>1){
          setNum(num-1)
         } else{
         setNum(1);
     }
     }
      const [selectDate, setSelectDate] =useState(null)
    return(
        <div>
           <div className="container">
               <div className="findaride">
                    <h1>Find a ride</h1>
               </div>
               <div class="relative">
                <div className="wrapper-input">
                      <input type="text" placeholder="Leaving From" name="form" autocorrect="off" />
                    </div>
                    <div className="wrapper-input">
                      <input type="text" placeholder="Going To" name="lform" autocorrect="off" />
                    </div>
               <div className="dayandpassanger">
                 <div className="forlinehrfindride"> <hr/></div>
                   <div className="adddayandpassanger">
                    <DatePicker selected={selectDate}
                    onChange={date => setSelectDate(date)}
                     
                     placeholderText='Date'
                     minDate={new Date()}
                     isClearable
                    />
                   {/* <a className="searchforday" href="">
                       <span id="usedtoaddday">Today</span>
                   </a> */}
                  
                  
                        <button id="dec_inc" onClick={decNum} ><span>-</span></button> <span id="inc_num">{num} </span> <a className="noofpassenger" href="">
                       <span id="startingsetone">Passenger</span>
                   </a><button  id="dec_inc" onClick={incNum}><span>+</span></button>
                       
                  </div>
                  
                    <div className="forlinehrfindride"> <hr/></div>
                    <a href=""> <button id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Search</button></a>
               </div>
                 <div className="LoginForm">
                    <h2>Travel for less on these popular routes</h2>
                    <div className="loginwith">
                        <div className="LoginWithFb">
                            <div id="loginwithfacebook">
                                <div className="LoginCOntent">New Delhi → Chandigarh</div>
                               <div className="loginparent">
                                    
                                <div className="iconarrow"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-bwzfXH gpfbbh" width="24" height="24" aria-hidden="true"><polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline></svg></div>
                            </div>
                        </div>
                        </div>
                    </div>
                  <div className="forlinehr"> <hr/></div>
                   <div className="loginwith">
                        <div className="LoginWithFb">
                            <div id="loginwithfacebook">
                                <div className="LoginCOntent">New Delhi → Chandigarh</div>
                               <div className="loginparent">
                                    
                                <div className="iconarrow"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-bwzfXH gpfbbh" width="24" height="24" aria-hidden="true"><polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline></svg></div>
                            </div>
                        </div>
                        </div>
                    </div>
                  <div className="forlinehr"> <hr/></div>
                   <div className="loginwith">
                        <div className="LoginWithFb">
                            <div id="loginwithfacebook">
                                <div className="LoginCOntent">New Delhi → Chandigarh</div>
                               <div className="loginparent">
                                    
                                <div className="iconarrow"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-bwzfXH gpfbbh" width="24" height="24" aria-hidden="true"><polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline></svg></div>
                            </div>
                        </div>
                        </div>
                    </div>
                  <div className="forlinehr"> <hr/></div>
                   <div className="loginwith">
                        <div className="LoginWithFb">
                            <div id="loginwithfacebook">
                                <div className="LoginCOntent">New Delhi → Chandigarh</div>
                               <div className="loginparent">
                                    
                                <div className="iconarrow"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-bwzfXH gpfbbh" width="24" height="24" aria-hidden="true"><polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline></svg></div>
                            </div>
                        </div>
                        </div>
                    </div>
                  <div className="forlinehr"> <hr/></div>
                </div>
               
           </div>
         
        </div>
        </div>
    )
}
export default FindRide;