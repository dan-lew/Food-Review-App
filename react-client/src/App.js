import React from 'react';
//import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './Components/Layout/Navbar'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

// import ContactState from './Context/Contact/ContactState'
// import AuthState from './Context/Auth/AuthState';
// import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
//import AlertState from './Context/Alert/AlertState';
// import Alerts from './Components/Layout/Alerts';
//import setAuthToken from './util/setAuthToken'

// if(localStorage.token){
//   setAuthToken(localStorage.token);
// }

const  App=()=> {
  return (
   
          <Router>
            <div className="App">
              <Navbar />
              <div className="container"> 
              {/* <Alerts /> */}
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  {/* <Route exact path="/register" component={Register} /> */}
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </div>
          </Router>
        
  );
}

export default App;
