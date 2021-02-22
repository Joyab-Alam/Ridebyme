import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Dropdown';
import Dropdown from './Dropdown';

const OfferRide = () => {
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
                    <h1>Offer Ride</h1>
               </div>
               <div class="relative">
                <div className="wrapper-input">
                      <input type="text" placeholder="Leaving From" name="form" autocorrect="off" />
                    </div>
                    <div className="wrapper-input">
                      <input type="text" placeholder="Going To" name="lform" autocorrect="off" />
                    </div>
                    <div className="dob_gender">
             <div class="wrapper-input"><input type="text" placeholder="Vehical Type" name="vtype" autocorrect="off"/></div>
              <div class="wrapper-input"><input type="text" placeholder="Vehical No" name="vNo" autocorrect="off"/></div>
              <div class="wrapper-input"><input type="text" placeholder="Model" name="model" autocorrect="off"/></div>
              </div>
              {/* <Dropdown/> */}
              
               <div className="dayandpassanger">
                 <div className="forlinehrfindride"> <hr/></div>
                   <div className="adddayandpassanger">
                    <DatePicker selected={selectDate}
                    onChange={date => setSelectDate(date)}
                     
                     placeholderText='Date'
                     minDate={new Date()}

                    />
                   {/* <a className="searchforday" href="">
                       <span id="usedtoaddday">Today</span>
                   </a> */}
                  
                  <div className="hello123">
                        <button id="dec_inc" onClick={decNum} ><span>-</span></button> <span id="inc_num">{num} </span> <a className="noofpassenger" href="">
                       <span id="startingsetone">Seat Available</span>
                   </a><button  id="dec_inc" onClick={incNum}><span>+</span></button>
                   </div>
                       
                  </div>
                  
                    <div className="forlinehrfindride"> <hr/></div>
                    <a href=""> <button id="continue_btn" class="kirk-button kirk-button-primary sc-chPdSV iQWkhi" type="submit">Offer</button></a>
               </div>
                
               
           </div>
         
        </div>
        </div>
    )
}
export default OfferRide;