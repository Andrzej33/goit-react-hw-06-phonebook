import { configureStore, } from '@reduxjs/toolkit';
import { contactsSlice } from './ContactsSlice/slice';
import { filterSlice } from './MyValue/slice';


//  export const filter = createAction('contacts/filter');

 



// const myReducer = createReducer(0,{
//     [increment]:(state,action) => state + action.payload,
//     [decrement]:(state,action) => state - action.payload,
// })


// const contactsReducer = createReducer([],{
//     [add]:(state,action) => state.push(action.payload),
//     [remove]:(state,action) => state.filter(contact => contact.id !== action.payload)
// })

// const filterReducer = createReducer('',{
//     [filter]:(state,action) => state + action.payload,
    // [decrement]:(state,action) => state - action.payload,
// })

export const store = configureStore({
  reducer: {
    // myValue: mySlice.reducer,
    myContacts: contactsSlice.reducer,
    myFilter: filterSlice.reducer,
  },
})