import React from 'react';
import './FindRide.css';

const FindRide = () => {
    return(
        <div>
           <div className="container">
               <div className="findaride">
                    <h1>Find a ride</h1>
               </div>
               <div class="relative">
               <div class="pb-m">
               <a class="kirk-uneditableTextField" aria-labelledby="SearchFormDispatchVoice" href="/">
               <div class="sc-gGBfsJ leavingfromto">
               <div class="kirk-uneditableTextField-label kirk-uneditableTextField-label--ellipsis">
               <span class="text-lightMidnightGreen">Leaving from</span>
               </div></div></a></div>
               <div class="pb-m">
               <a class="kirk-uneditableTextField" href="/">
               <div class="sc-gGBfsJ leavingfromto">
               <div class="kirk-uneditableTextField-label kirk-uneditableTextField-label--ellipsis">
               <span class="text-lightMidnightGreen">Going to</span></div></div></a></div></div>
               <div className="dayandpassanger">
                 <div className="forlinehrfindride"> <hr/></div>
                   <div className="adddayandpassanger">
                   
                   <a className="searchforday" href="/">
                       <span id="usedtoaddday">Today</span>
                   </a>
                  
                  
                  
                        <a className="noofpassenger" href="/">
                       <span id="startingsetone">1 Passenger</span>
                   </a>
                  </div>
                    <div className="forlinehrfindride"> <hr/></div>
               </div>
                    
               
           </div>
        </div>
    )
}
export default FindRide;