import { combineReducers } from "@reduxjs/toolkit";
import { contactsSlice } from "./ContactsSlice/slice";
import { filterSlice } from "./MyValue/slice";


 export const reducer = combineReducers({
contacts: contactsSlice.reducer,
   filter: filterSlice.reducer, 
 })