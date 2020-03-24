import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";
 
// pages for this product
import Components from "views/Components/Components.js";
// import LandingPage from "views/LandingPage/LandingPage.js";
import AboutUsPage from "views/AboutUsPage/AboutUsPage.js";
import LoginPage from "views/FoodComponents/LoginPage/LoginPage.js";
import SendMessagePage from "views/sendMessagePage/sendMessagePage";
import ReviewPage from "views/ReviewPage/reviewPage";
import Home from "views/FoodComponents/Pages/Home";
import UsersProfile from 'views/FoodComponents/Pages/UsersProfile'
import About from 'views/FoodComponents/Pages/About';
import WelcomeUser from 'views/FoodComponents/Pages/WelcomeUser'
import RestaurantsReview from 'views/FoodComponents/Pages/RestaurantsReview'
import ReviewState from "../src/context/reviewPage/ReviewState";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/alertState";
import Alerts from 'views/FoodComponents/Layout/Alert'
import RegisterPage from "views/FoodComponents/RegisterPage/RegisterPage";
import ForgetPassword from "views/FoodComponents/ForgetPassword/ForgetPassword";
import EditUserProfile from "views/FoodComponents/EditUserProfile/EditUserProfilePage";
import RestaurantState from './context/restaurants/restaurantState';
import PrivateRoute from './components/routing/PrivateRoute'
var hist = createBrowserHistory();

function App() {
  return (
    <div>
      <AuthState>
        <RestaurantState>
        <ReviewState>
          <AlertState>           
            <Router history={hist}>
            <Alerts />
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/sendmessagepage" component={SendMessagePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/ForgetPassword" component={ForgetPassword} />
                <PrivateRoute path="/login/welcome-user" component={WelcomeUser} />
                <PrivateRoute path="/login/user-profile" component={UsersProfile} />
                <PrivateRoute path="/editprofile" component={EditUserProfile} />
                <PrivateRoute path="/restaurantsReview" component={RestaurantsReview}/>               
                <PrivateRoute path="/review-page" component={ReviewPage} />
                <Route path="/" component={Home} />
              </Switch>
            </Router>
          </AlertState>
        </ReviewState>
        </RestaurantState>
      </AuthState>
    </div>
  );
}


export default App;