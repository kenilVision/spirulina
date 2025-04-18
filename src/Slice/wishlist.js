import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// --- Async Thunks (local logic) ---

export const AddtoWishlist = createAsyncThunk(
  "wishlist/Add",
  async (product, { getState, rejectWithValue }) => {
    try {
      const { items } = getState().wishlist;
      const exists = items.find(item => item._id === product._id);
      if (exists) {
        return rejectWithValue("Product already in wishlist");
      }
      return product;
    } catch (err) {
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

export const RemovefromWishlist = createAsyncThunk(
  "wishlist/Remove",
  async (productId, { rejectWithValue }) => {
    try {
      return productId;
    } catch (err) {
      return rejectWithValue(err.message || "Something went wrong");
    }
  }
);

// --- Slice ---

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    loading: false,
    error: null,
    items: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddtoWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddtoWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(AddtoWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(RemovefromWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RemovefromWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item._id !== action.payload);
        state.loading = false;
      })
      .addCase(RemovefromWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// --- Exports ---

export default wishlistSlice.reducer;
