import { combineReducers } from "@reduxjs/toolkit";
import { contactsSlice } from "./ContactsSlice/filterSlice";
import { filterSlice } from "./FilterSlice/filterSlice";


 export const reducer = combineReducers({
  contacts: contactsSlice.reducer,
     filter: filterSlice.reducer, 
   })