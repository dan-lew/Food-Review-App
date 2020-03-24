// import React, { useReducer } from 'react';
// import axios from 'axios'
// import AuthContext from './authContext';
// import authReducer from './authReducer';

  
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
    GET_USER_PROFILE,
    EDIT_PROFILE ,
    // USER_ERROR,
    
   
} from "../type";

export default (state,action)=>{
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                ...action.payload,
                isAuthenticated:true,
                loading:false
            }
        case  AUTH_ERROR:
        case  REGISTER_FAIL:
        case  LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                error:action.payload
            }
        case  LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token:null,
                isAuthenticated:false,
                loading:false,
                user:null,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:action.payload
            }
        case  GET_USER_PROFILE :
            return{
                    ...state,
                    isAuthenticated:true,
                    loading:false,
                    user:action.payload
                }
        case EDIT_PROFILE :
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:action.payload
            }
        
        default:
            return state;
    }
}
