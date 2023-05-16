import { configureStore, } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { contactsSlice } from './ContactsSlice/slice';
//  
import { reducer } from './reducer';


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
  reducer
})



// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig,reducer);

// export const store = configureStore({reducer:persistedReducer});

// export const persistor = persistStore(store)