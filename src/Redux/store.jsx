import { configureStore, createAction,createReducer,createSlice } from '@reduxjs/toolkit'

// export const increment = createAction('myValue/increment');
// const decrement = createAction('myValue/decrement');
// export const add = createAction('contact/add');
// export const remove = createAction('contact/remove');
 export const filter = createAction('contacts/filter');

 const mySlice = createSlice({name: 'myValue', initialState:5,reducers:{
    increment(state,action){ return state + action.payload;},
    decrement(state,action){return state - action.payload;},
 }})

 const contactsSlice = createSlice({name: 'myValue', initialState:[],reducers:{
    add(state,action){ state.push(action.payload);},
    remove(state,action){return state.filter(contact => contact.id !== action.payload);},
 }})

 export const {increment,decrement} = mySlice.actions;
 export const {add,remove} = contactsSlice.actions;

// const myReducer = createReducer(0,{
//     [increment]:(state,action) => state + action.payload,
//     [decrement]:(state,action) => state - action.payload,
// })


// const contactsReducer = createReducer([],{
//     [add]:(state,action) => state.push(action.payload),
//     [remove]:(state,action) => state.filter(contact => contact.id !== action.payload)
// })

const filterReducer = createReducer('',{
    [filter]:(state,action) => state + action.payload,
    // [decrement]:(state,action) => state - action.payload,
})

export const store = configureStore({
  reducer: {
    myValue: mySlice.reducer,
    myContacts: contactsSlice.reducer,
    myFilter: filterReducer,
  },
})