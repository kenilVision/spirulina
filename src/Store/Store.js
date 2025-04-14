import { configureStore } from '@reduxjs/toolkit'
import cart from '../Slice/cart';
import User from '../Slice/user';
const store = configureStore({
    reducer:{
        User : User ,
        cart : cart 
    }
});


export default store