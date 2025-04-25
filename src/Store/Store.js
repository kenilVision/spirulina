import { configureStore } from '@reduxjs/toolkit'
import cart from '../Slice/cart';
import User from '../Slice/user';
import product from '../Slice/product'
import wishlist from "../Slice/wishlist"
import orderSlice from "../Slice/order";
import notification from '../Slice/notification'
const store = configureStore({
    reducer:{
        User : User ,
        cart : cart ,
        product : product,
        wishlist: wishlist,
        order: orderSlice,
        notification : notification
    }
});


export default store