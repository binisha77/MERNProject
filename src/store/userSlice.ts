import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./types";




const userInfo:User ={
  name: "sovitha Khadka",
  age:21
}


 const userSlice = createSlice({
  name :"user",
  initialState:userInfo,
  reducers:{
    setName(state:User, action: PayloadAction<string>){
      state.name=action.payload //binisha
    },
    setAge(state:User, action: PayloadAction<number>){
      state.age = action.payload
    }
  }
})
//

 export const {setName,setAge} = userSlice.actions

export default userSlice.reducer