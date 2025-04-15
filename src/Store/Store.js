import { configureStore } from '@reduxjs/toolkit'
import cart from '../Slice/cart';
import User from '../Slice/user';
import product from '../Slice/product'
const store = configureStore({
    reducer:{
        User : User ,
        cart : cart ,
        product : product
    }
});


export default store