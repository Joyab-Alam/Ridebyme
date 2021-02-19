import React from 'react';
import Home from "./components/Home";
import FindRide from './components/FindRide';
import Login from './components/Login';
import OfferRide from './components/OfferRide';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import  LoginWithMobile from './components/LoginMobile';
import SignupWithMob from './components/SignupWithMob';
import ForgotPass from './components/ForgotPass';
import EnterDeatils from './components/EnterDetails';
import SignupDOB from './components/SignupDOB';
import SelectGender from './components/SelectGender';
import ShowPassword from './components/Passwordforsignup';
const App = () =>{
  return (
    <Router>
   <Navbar/>
   <Switch>
     <Route path='/' component={Home} exact>
       <Home/>
     </Route>
     <Route path='/findride' component={FindRide} exact>
       <FindRide/>
     </Route>
     <Route path='/offerride' component={OfferRide} exact>
       <OfferRide/>
     </Route>
     <Route path='/signup' component={SignUp} exact>
       <SignUp/>
     </Route>
     <Route path='/login' component={Login} exact>
       <Login/>
     </Route>
      <Route path='/loginwithemobile' component={ LoginWithMobile} exact>
       <LoginWithMobile/>
     </Route>
      <Route path='/signupwithemobile' component={SignupWithMob} exact>
       <SignupWithMob/>
     </Route>
      <Route path='/forgotpass' component={ForgotPass} exact>
       <ForgotPass/>
     </Route>
      <Route path='/enterdetails' component={EnterDeatils} exact>
       <EnterDeatils/>
     </Route>
      <Route path='/signupdob' component={SignupDOB} exact>
       <SignupDOB/>
     </Route>
      <Route path='/registergender' component={SelectGender} exact>
       <SelectGender/>
     </Route>
     <Route path='/registerpassword' component={ShowPassword} exact>
       <ShowPassword/>
     </Route>
     
   </Switch>
   </Router>
  );
}

export default App;
