import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../globals/types/type";
import axios from "axios";
import type { AppDispatch } from "./store";
import API from "../http";



interface ILoginUser{
  email :string,
  password :string
}

interface IUser{
  
    username :string | null,
    email :string | null,
    password :string | null
    token : string | null
  }
  interface IAuthState{
    user : IUser,
  status : Status
}
//initial state
const initialState : IAuthState={
  user:{
    username :null,
    email :null,
    password :null,
    token : null
  },
  status: Status.LOADING
}

//slice
 const authSlice = createSlice({
  name :"auth",
  initialState,
  reducers:{
    setUser(state:IAuthState,action:PayloadAction<IUser>){
      state.user = action.payload

    },
    setStatus(state:IAuthState,action:PayloadAction<Status>){
        state.status =action.payload
    },
    setToken(state:IAuthState,action:PayloadAction<string>){
      state.user.token = action.payload
    }
  }
  }
)
 export const {setStatus,setUser,setToken} = authSlice.actions
 export default authSlice.reducer

 export function registerUser(data:IUser){
  return async function registerUserThunk(dispatch:AppDispatch) {
    try{
     const response = await API.post("/auth/register",data)
     console.log(response)
     if(response.status===201){
      dispatch(setStatus(Status.SUCCESS))
      dispatch(setUser(response.data.data))
     }
else{
  dispatch(setStatus(Status.ERROR))

}
  }
   catch (error) {
    console.log(error)
    dispatch(setStatus(Status.ERROR));
   
  }
 }
}

 export function loginUser(data:ILoginUser){
   return async function registerUserThunk(dispatch:AppDispatch) {
    try{
     const response = await API.post("/auth/login",data)


if(response.status===200){
  dispatch(setStatus(Status.SUCCESS))
  if(response.data.token){

   localStorage.setItem("tokenHoYo",response.data.token)
       dispatch(setToken(response.data.token))
  }
  else{
    dispatch(setStatus(Status.ERROR))
  }
}else{
  dispatch(setStatus(Status.ERROR))
}


  }
  
   catch (error) {
    console.log(error)
    dispatch(setStatus(Status.ERROR));
   
  }
 }
}

 export function forgotPassword(data:{email :string}){
  return async function forgotPasswordThunk(dispatch:AppDispatch){
    try{
     const response = await axios.post("https://localhost:4000/api/auth/forgot-password",data)
console.log(response)

if(response.status===200){
  dispatch(setStatus(Status.SUCCESS))
}else{
  dispatch(setStatus(Status.ERROR))
}


  }
  
   catch (error) {
    console.log(error)
    dispatch(setStatus(Status.ERROR));
   
  }
 }
}

