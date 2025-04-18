import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios/axios';

// Fetch single product
export const fetchSingleProduct = createAsyncThunk(
  'product/fetchSingleProduct',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/product/get/${productId}`);
      return response.data;
    } catch (error) {
      throw rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Fetch single combo
export const fetchSinglecombo = createAsyncThunk(
  'combo/fetchSinglecombo',
  async (comboId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/product-combo/get/${comboId}`);
      return response.data;
    } catch (error) {
      throw rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Initial state
const initialState = {
  product: null,
  type: null,        // <- 'product' or 'combo'
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clearProduct(state) {
      state.product = null;
      state.type = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Product
      .addCase(fetchSingleProduct.pending, (state) => {
        state.product = null;
        state.type = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.type = 'product';
        state.loading = false;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.product = null;
        state.type = null;
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })

      // Combo
      .addCase(fetchSinglecombo.pending, (state) => {
        state.product = null;
        state.type = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSinglecombo.fulfilled, (state, action) => {
        state.product = action.payload;
        state.type = 'combo';
        state.loading = false;
      })
      .addCase(fetchSinglecombo.rejected, (state, action) => {
        state.product = null;
        state.type = null;
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { clearProduct } = productSlice.actions;
export default productSlice.reducer;
