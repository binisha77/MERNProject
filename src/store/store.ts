import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";

 const store = configureStore({
  reducer:{
    haha: productSlice,
    hehe : userSlice,
  
  }
})

export default store

export type AppDispactch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>