import { createSlice } from "@reduxjs/toolkit";

// export const mySlice = createSlice({name: 'myValue', initialState:5,reducers:{
//     increment(state,action){ return state + action.payload;},
//     decrement(state,action){return state - action.payload;},
//  }})

 

//  export const {increment,decrement} = mySlice.actions;

 export const filterSlice = createSlice({name: 'filter', initialState:'',reducers:{
    show(state,action){ return  action.payload;},
    decrement(state,action){return state - action.payload;},
 }})

 

 export const {show,decrement} = filterSlice.actions;
