import { configureStore } from '@reduxjs/toolkit'
import cart from '../Slice/cart';
const store = configureStore({
    reducer:{
        cart : cart 
    }
});


export default store