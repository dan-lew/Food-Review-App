import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utility/setAuthToken";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  CLEAR_ERRORS,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAIL,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FAILER,
  GET_USER_PROFILE,
  EDIT_PROFILE,
  USER_ERROR,
  LOGOUT,
  REGISTER_REVIEW
} from "../type";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    
    try {
      const res = await axios.get("/api/login");
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
      
    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  }
  };

  // register user
  const register = async formData => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    try {
      
      const res = await axios.post("/api/register", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
  };

  // Register Review
  const registerReview = async formData => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    try {
      const res = await axios.post("/api/reviews/review", formData, config);
      
      dispatch({
        type:   REGISTER_SUCCESS,
        payload: res.data
      });
      
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.msg
      });
    }
  };
  
 // send message 
 const sendMail = async formData => {
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  try {
    const res = await axios.post("/api/sendMessage/", formData, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    loadUser();
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg
    });
  }
};

// Login User 
 const login = async formData => {   
    const config = { 
             headers: {'Content-Type': 'application/json'}
            };
    try { 
        const res = await axios.post('/api/login', formData, config);
        dispatch({
                 type: LOGIN_SUCCESS,
                 payload: res.data 
                });
        loadUser();
    } 
    catch (err) { 
        dispatch({ type: LOGIN_FAIL,  payload: err.response.data.msg });  
    }
  };


  //Forget Password
  const forgot_password=async formData=>{
    const config = { 
      headers: {'Content-Type': 'application/json'}
     };
     try { 
      const res = await axios.post('/api/resetpassword/forgot', formData, config);
      dispatch({
               type: FORGOT_PASSWORD,
               payload: res.data 
              });
  } 
    catch (err) { 
      dispatch({ type: FORGOT_PASSWORD_FAILER,  payload: err.response.data.msg });  
  }
  }



//Get user Profile data
const get_user_profile = async ()=>{
 try {
  const res=await axios.get('/api/editprofile');
  dispatch({
    type: GET_USER_PROFILE,
    payload: res.data 
   }); 

 } catch (error) {
  dispatch({
    type: USER_ERROR,
    payload: error.response.msg 
   }); 
 }
}


  //Edit Profile
  const edit_profile=async formData=>{
    const config = { 
      headers: {'Content-Type': 'application/json'}
     };
     try { 
      const res = await axios.post('/api/editprofile', formData, config);
      dispatch({
               type: EDIT_PROFILE,
               payload: res.data 
              });
  } 
  catch (err) { 
    dispatch({ type: EDIT_PROFILE,  payload: err.response.data.msg });  
}
  }


  // Logout
  const logout = () => {
    dispatch({
      type:LOGOUT
    })
  };



  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        registerReview,
        sendMail,
        login,
        loadUser,
        clearErrors,
        forgot_password,
        get_user_profile,
        edit_profile,
        logout,

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
