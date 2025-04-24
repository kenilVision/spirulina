import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios';

const initialState = {
    loading: true,
    orders: []
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
    }
});

export const getOrder = createAsyncThunk('getOrder', async (_, { dispatch }) => {
    try {
        const response = await axiosInstance.get('/order/my-order');

        if (response?.success) {
            dispatch(setOrders(response.data));
            dispatch(setLoading(false));
        }
        else {
            dispatch(setOrders([]));
            dispatch(setLoading(false));
        }
    } catch (error) {
        dispatch(setLoading(false));
    }
});

export const { setLoading, setOrders } = orderSlice.actions;

export default orderSlice.reducer;
