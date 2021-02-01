import React from 'react';
import Home from "./components/Home";
import FindRide from './components/FindRide';
import Login from './components/Login';
import OfferRide from './components/OfferRide';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
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
   </Switch>
   </Router>
  );
}

export default App;
