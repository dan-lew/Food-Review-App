import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/RegisterPage.js";
import AlertState from './context/alert/alertState';
import Alerts from './context/alert/Alerts';
import AuthState from './context/auth/authState';



var hist = createBrowserHistory();

const App = ()=> {
    return (
    <AuthState>
        <AlertState>
            <Router history={hist}>

                <div>   
                    <Alerts/>
                    <Switch>
                    <Route path="/landing-page" component={LandingPage} />
                    <Route path="/profile-page" component={ProfilePage} />
                    <Route path="/login-page" component={LoginPage} />
                    <Route path="/register-page" component={RegisterPage} />
                    <Route path="/" component={Components} />
                    </Switch>
                </div>
            </Router>
        </AlertState>
    </AuthState>
    )     
}


export default App;