import React , {useState} from 'react';
import img1 from "../images/bgimg.svg";
import "./Home.css";

const Home =() =>{
     const [num, setNum] = useState(1);
     const incNum = () =>{
         setNum(num+1)
     }
     const decNum = () =>{
         if(num>1){
          setNum(num-1)
         } else{
         setNum(1);
     }
     }
    
    return(

        <div>
            <div className="mainbgimg">
            <img id="mainbgimg" src={img1} alt="bgimg"/>
            <h1 id="homepageheading">Your ride. Your choice.</h1>
            <div className="container">
                <div className="searchparent">
                    <div className="searchcityfrom">
                         <input type="text" id="leavingfrom"  placeholder="Leaving from.."/>
                        
                    </div> <hr id="verticalline"/> <hr id="verticallinesm"/>
                     <div className="searchcityto">
                         <input type="text" id="leavingto" placeholder="Going to.." />
                         
                    </div><hr id="verticalline"/><hr id="verticallinesm"/>
                    <div className="parent-day-passenger">
                        <div className="child-day">
                             <input type="date" id="myDate"></input>
                             
                        </div> <hr id="verticallineused"/>
                        <div className="child-passanger">
                           <p> <button onClick={decNum} >-</button> {num} Passenger<button onClick={incNum}>+</button></p>
                        </div>
                    </div>
                    <div className="search-ride">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-bwzfXH jENUAC" width="24" height="24" aria-hidden="true"><g fill="none" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="22" y1="22" x2="16.4" y2="16.4"></line><circle cx="10" cy="10" r="9"></circle></g></svg>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Home;