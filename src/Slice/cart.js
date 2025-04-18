import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunks
export const AddtoCart = createAsyncThunk(
  "cart/add",
  async (data, { getState, rejectWithValue }) => {
    try {

      const { items } = getState().cart;
      console.log(data)

      const newItems = [...items];
      
      const existingIndex = newItems.findIndex(
        item => item.data._id === data._id 
      );
      
      if (existingIndex !== -1) {
        // Create a new object for the existing item
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          qty: newItems[existingIndex].qty + data.qty
        };
      } else {
        // Add new item
        newItems.push({data});
      }
      
      return newItems;
      
    } catch (err) {
      return rejectWithValue(err.message || "Failed to add to cart");
    }
  }
);

export const RemovefromCart = createAsyncThunk(
  "cart/remove",
  async ({ productId, type }, { getState, rejectWithValue }) => {
    try {
      const { items } = getState().cart;
      return items.filter(item => !(item.product._id === productId && item.type === type));
    } catch (err) {
      return rejectWithValue(err.message || "Failed to remove from cart");
    }
  }
);

// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {
    // Optional: Add direct reducer for quick quantity updates
    updateQuantity: (state, action) => {
      const { productId, type, newQty } = action.payload;
      const item = state.items.find(
        item => item.product._id === productId && item.type === type
      );
      if (item) item.qty = newQty;
    }
  },
  extraReducers: (builder) => {
    builder
      // Add to Cart
      .addCase(AddtoCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddtoCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(AddtoCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Remove from Cart
      .addCase(RemovefromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RemovefromCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(RemovefromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;