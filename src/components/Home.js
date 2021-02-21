import React , {useState} from 'react';
import img1 from "../images/bgimg.svg";
import img2 from "../images/homedriver.jpg"
import "./Home.css";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import GoogleMap from '../components/GoogleMap';

const Home =() =>{
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
            <div className="mainbgimg">
              <img id="mainbgimg" src={img1} alt="bgimg"/>
             <div className="mainchild">
               
            <h1 id="homepageheading">Your ride. Your choice.</h1>
            <div className="container">
                <div className="searchparent">
                    <div className="searchcityfrom">
                         <input type="text" id="leavingfrom"  placeholder="Leaving from.."/>
                         <GoogleMap/>
                        
                    </div> <hr id="verticalline"/> <hr id="verticallinesm"/>
                     <div className="searchcityto">
                         <input type="text" id="leavingto" placeholder="Going to.." />
                      
                         
                    </div><hr id="verticalline"/><hr id="verticallinesm"/>
                    <div className="parent-day-passenger">
                        <div className="child-day">
                           <DatePicker id="homedatepic" selected={selectDate}
                            onChange={date => setSelectDate(date)} 
                            placeholderText='Date'
                            minDate={new Date()}
                            />
                             
                        </div> <hr id="verticallineused"/>
                        <div className="child-passanger">
                           <p> <button id="dec_inc1" onClick={decNum} ><span>-</span></button> {num} Passenger<button id="dec_inc1" onClick={incNum}><span>+</span></button></p>
                        </div>
                    </div>
                    <div className="search-ride">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-bwzfXH jENUAC" width="24" height="24" aria-hidden="true"><g fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="22" y1="22" x2="16.4" y2="16.4"></line><circle cx="10" cy="10" r="9"></circle></g></svg>
                    </div>
                </div>
               
            </div>
             </div>
             
            </div>
            <div className="secondhome_parent">
                 <div className="presentationimg">
                      <img id="presentationimg" src={img2} alt="bgimg"/>
                 </div>

                 <div className="presentcontent">
                     <h2 id="drivesoon">Driving in your car soon?</h2>
                     <p id="drive_journey">Let's make this your least expensive journey ever.</p>
                    <a class="kirk-button kirk-button-primary sc-chPdSV jdlQkk kirk-media-content-button" href="/offerride">Offer a ride</a>
                 </div>
             </div>
             <div className="where_to_go">
               <div className="container1">
                 <div className="partentwhere_to">
                    <div className=" where_to_go_heading">
                        <h2>Where do you want to go?</h2>
                        </div>
                    <ul className="home-3-columns">
                       
                       <li class="mb-m home-column"><a type="button" class="kirk-item kirk-item--clickable sc-cvbbAY kNumBt kirk-item-choice pl-l pr-m home-axis" href="/"><span class="kirk-item-leftWrapper"><span class="kirk-item-leftText"><span class="kirk-text kirk-text-title sc-gzVnrw hMBsDE" >Delhi » Chandigarh</span></span></span><span class="kirk-item-rightAddon"><strong class="pl-m text-green text-m" aria-label="
                          prices from
                          ₹500
                        ">₹500</strong></span><span class="kirk-item-rightAddon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ifAKCX cqcJrU" width="24" height="24" aria-hidden="true"><polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline></svg></span></a></li>
                       <li class="mb-m home-column"><a type="button" class="kirk-item kirk-item--clickable sc-cvbbAY kNumBt kirk-item-choice pl-l pr-m home-axis" href="/"><span class="kirk-item-leftWrapper"><span class="kirk-item-leftText"><span class="kirk-text kirk-text-title sc-gzVnrw hMBsDE" >Delhi » Chandigarh</span></span></span><span class="kirk-item-rightAddon"><strong class="pl-m text-green text-m" aria-label="
                          prices from
                          ₹500
                        ">₹500</strong></span><span class="kirk-item-rightAddon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ifAKCX cqcJrU" width="24" height="24" aria-hidden="true"><polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline></svg></span></a></li>
                       <li class="mb-m home-column"><a type="button" class="kirk-item kirk-item--clickable sc-cvbbAY kNumBt kirk-item-choice pl-l pr-m home-axis" href="/"><span class="kirk-item-leftWrapper"><span class="kirk-item-leftText"><span class="kirk-text kirk-text-title sc-gzVnrw hMBsDE" >Delhi » Chandigarh</span></span></span><span class="kirk-item-rightAddon"><strong class="pl-m text-green text-m" aria-label="
                          prices from
                          ₹500
                        ">₹500</strong></span><span class="kirk-item-rightAddon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ifAKCX cqcJrU" width="24" height="24" aria-hidden="true"><polyline fill="none" stroke="#708C91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"></polyline></svg></span></a></li>
                        
                    </ul>
                    <button class="kirk-button kirk-button-unstyled sc-chPdSV iQWkhi home-more text-white" type="button" aria-expanded="false" aria-controls="home-seo-axes">See our most popular rides</button>
                    </div>

               </div>


             </div>
              <div className="container1">
                   <div className="articlesection">
                        <h2>Go literally anywhere.<br></br>
                        From anywhere.</h2>
                        <a class="kirk-button kirk-button-unstyled sc-chPdSV iQWkhi kirk-columned-content-section-top-link" href="/">Find out more</a>
                   </div>
                   <div className="smart_simple_seamless">
                       <div className="smart">
                           <p>Smart</p>
                           <span>With access to millions of journeys, you can quickly find people nearby travelling your way.</span>
                       </div>
                       <div className="simple">
                           <p>Simple</p>
                           <span>Enter your exact address to find the perfect ride. Choose who you’d like to travel with. And book!</span>
                       </div>
                       <div className="seamless">
                           <p>Seamless</p>
                           <span>Get to your exact destination, without the hassle. No queues. No waiting around.</span>
                       </div>
                   </div>
              </div>
               <div className="container1">
                   <div className="articlesection">
                        <h2>3 things you'll love about RidebyIndi.</h2>
                       
                   </div>
                   <div className="smart_simple_seamless">
                       <div className="smart">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ifAKCX cqcJrU" width="40" height="40" aria-hidden="true"><path d="M22.9,8.2l-3-4C19.807,4.074,19.657,4,19.5,4H15V1.5C15,1.224,14.775,1,14.5,1h-6C8.224,1,8,1.224,8,1.5V4H2.5 C2.224,4,2,4.224,2,4.5v8C2,12.775,2.224,13,2.5,13H8v10.5C8,23.775,8.224,24,8.5,24h6c0.275,0,0.5-0.225,0.5-0.5V13h4.5 c0.157,0,0.307-0.074,0.4-0.2l3-4C23.033,8.622,23.033,8.378,22.9,8.2z M9,2h5v2H9V2z M14,23H9V13h5V23z M19.25,12H3V5h16.25 l2.625,3.5L19.25,12z"></path></svg>
                           <p>Choice</p>
                           <span>We go everywhere. Literally thousands of destinations. No station required.</span>
                       </div>
                       <div className="simple">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ifAKCX cqcJrU" width="40" height="40" aria-hidden="true"><g><path d="M19.33,8.5c0-0.276-0.225-0.5-0.5-0.5h-3.855c-0.275,0-0.5,0.224-0.5,0.5s0.225,0.5,0.5,0.5h3.855 C19.105,9,19.33,8.776,19.33,8.5z"></path><path d="M9.906,8.492V8.133c0-0.994-0.798-1.799-1.781-1.799S6.344,7.139,6.344,8.133v0.359 c0,0.994,0.798,1.799,1.781,1.799S9.906,9.486,9.906,8.492z" fill="#708C91"></path><path d="M4.167,13.422v0.528c0,0.165,0.134,0.3,0.3,0.3h7.316c0.166,0,0.3-0.135,0.3-0.3v-0.528 c0-0.713-0.474-1.339-1.162-1.526c-0.75-0.204-1.773-0.417-2.797-0.417s-2.047,0.213-2.797,0.417 C4.641,12.083,4.167,12.709,4.167,13.422z" fill="#708C91"></path><path d="M12,18H1.982V1h2.904C5.11,2.139,6.086,3,7.265,3c1.178,0,2.154-0.861,2.379-2h4.88 c0.225,1.139,1.201,2,2.379,2s2.154-0.861,2.379-2h2.903v9c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V0.5 c0-0.276-0.224-0.5-0.5-0.5H18.83c-0.276,0-0.5,0.224-0.5,0.5c0,0.833-0.643,1.5-1.428,1.5s-1.428-0.667-1.428-1.5 c0-0.276-0.224-0.5-0.5-0.5H9.192c-0.276,0-0.5,0.224-0.5,0.5c0,0.833-0.643,1.5-1.427,1.5S5.837,1.333,5.837,0.5 c0-0.276-0.224-0.5-0.5-0.5H1.482c-0.276,0-0.5,0.224-0.5,0.5v18c0,0.276,0.224,0.5,0.5,0.5H12c0.276,0,0.5-0.224,0.5-0.5 S12.276,18,12,18z"></path><path d="M25.354,13.646c-0.195-0.195-0.512-0.195-0.707,0L19,19.293l-2.646-2.646c-0.195-0.195-0.512-0.195-0.707,0 s-0.195,0.512,0,0.707l3,3c0.195,0.195,0.512,0.195,0.707,0l6-6C25.549,14.158,25.549,13.842,25.354,13.646z"></path></g></svg>
                           <p>Carpool with confidence</p>
                           <span>Government ID verification adds another level of security to member profiles.</span>
                       </div>
                       <div className="seamless">
                       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-ifAKCX cqcJrU" width="40" height="40" aria-hidden="true"><g><path d="M9,23.5c-0.133,0-0.261-0.053-0.355-0.147C8.312,23.017,0.5,15.085,0.5,10c0-5.321,4.322-8.5,8.5-8.5 c4.178,0,8.5,3.179,8.5,8.5c0,1.083-0.353,2.37-1.049,3.825c-0.119,0.249-0.419,0.354-0.667,0.235 c-0.249-0.119-0.354-0.418-0.235-0.667C16.18,12.074,16.5,10.932,16.5,10c0-4.695-3.813-7.5-7.5-7.5S1.5,5.305,1.5,10 c0,4.098,5.967,10.661,7.5,12.279c0.462-0.487,1.327-1.424,2.303-2.599c0.177-0.213,0.492-0.241,0.704-0.065 c0.212,0.177,0.242,0.492,0.065,0.704c-1.475,1.776-2.667,2.982-2.718,3.032C9.261,23.446,9.133,23.5,9,23.5z"></path><path d="M9,13.5c-1.93,0-3.5-1.57-3.5-3.5S7.07,6.5,9,6.5s3.5,1.57,3.5,3.5S10.93,13.5,9,13.5z M9,7.5 c-1.378,0-2.5,1.122-2.5,2.5s1.122,2.5,2.5,2.5s2.5-1.122,2.5-2.5S10.378,7.5,9,7.5z"></path><path d="M20,20.5c-0.128,0-0.256-0.049-0.354-0.146c-0.195-0.195-0.195-0.512,0-0.707l2.146-2.146H14 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h7.793l-2.146-2.146c-0.195-0.195-0.195-0.512,0-0.707s0.512-0.195,0.707,0 l2.999,2.999c0.004,0.004,0.008,0.008,0.011,0.012l0,0c0.001,0,0.001,0,0.001,0c0,0.001,0.001,0.001,0.001,0.001l0,0 c0.042,0.046,0.075,0.097,0.097,0.151c0.022,0.055,0.036,0.113,0.038,0.176l0,0c0,0,0,0,0,0.001c0,0,0,0,0,0.001l0,0 c0,0.009,0,0.017,0,0.025l0,0c0,0.001,0,0.001,0,0.001c0,0.001,0,0.001,0,0.001l0,0c-0.002,0.062-0.016,0.121-0.038,0.176 c-0.021,0.055-0.055,0.105-0.097,0.151l0,0c0,0-0.001,0-0.001,0.001c0,0,0,0-0.001,0l0,0c-0.003,0.004-0.007,0.008-0.011,0.012 l-2.999,2.999C20.256,20.451,20.128,20.5,20,20.5z"></path></g></svg>
                           <p>Get going faster</p>
                           <span>No need to travel across town, catch a ride leaving near you.</span>
                       </div>
                   </div>
              </div>
               <div className="footer">
                   <a>Footer</a>
               </div>
            
        </div>
    )
}
export default Home;