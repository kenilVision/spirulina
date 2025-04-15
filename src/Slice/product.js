import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios';


export const fetchSingleProduct = createAsyncThunk('product/fetchSingleProduct',async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/product/get/${productId}`);
      console.log("hey")
      console.log(response)
      return response.data.data; 
    } catch (error) {
      throw rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  product: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProduct(state) {
      state.product = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { clearProduct } = productSlice.actions;

export default productSlice.reducer;
