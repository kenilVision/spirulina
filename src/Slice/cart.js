import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async Thunks
export const AddtoCart = createAsyncThunk(
  "cart/add",
  async (data, { getState, rejectWithValue }) => {
    try {
      const { items } = getState().cart;
      const newItems = [...items];
      let existingIndex;

      if (data.type === "product") {
        existingIndex = newItems.findIndex(
          item =>
            item.data._id === data._id &&
            item.data.type === data.type &&
            item.data.variants.label === data.variants.label 
        );
      } else {
        existingIndex = newItems.findIndex(
          item => item.data._id === data._id && item.data.type === data.type
        );
      }

      
      if (existingIndex !== -1) {
        // Update quantity while preserving structure
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          qty: newItems[existingIndex].qty + data.qty
        };
      } else {
        // Add new item with qty
        newItems.push({ data, qty: data.qty });
      }

      return newItems;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to add to cart");
    }
  }
);

export const RemovefromCart = createAsyncThunk(
  "cart/remove",
  async ({ _id, type, label }, { getState, rejectWithValue }) => {
    try {
      const { items } = getState().cart;

      const filteredItems = items.filter(item => {
        const itemId = item.data._id;
        const itemType = item.data.type;
        const itemLabel = item.data.variants?.label;

        if (type === "product") {
          return !(
            itemId === _id &&
            itemType === type &&
            itemLabel?.trim() === label?.trim()
          );
        } else {
          return !(itemId === _id && itemType === type);
        }
      });

      return filteredItems;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to remove from cart");
    }
  }
);

export const IncreaseQty = createAsyncThunk(
  "cart/increaseQty",
  async ({ _id, type, label }, { getState, rejectWithValue }) => {
    try {
      const { items } = getState().cart;

      const updatedItems = items.map(item => {
        const isProduct = item.data.type === "product";
        const match =
          item.data._id === _id &&
          item.data.type === type &&
          (!isProduct || item.data.variants?.label === label);

        if (match) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });

      return updatedItems;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to increase quantity");
    }
  }
);
export const DecreaseQty = createAsyncThunk(
  "cart/decreaseQty",
  async ({ _id, type, label }, { getState, rejectWithValue }) => {
    try {
      const { items } = getState().cart;

      const updatedItems = items
        .map(item => {
          const isProduct = item.data.type === "product";
          const match =
            item.data._id === _id &&
            item.data.type === type &&
            (!isProduct || item.data.variants?.label === label);

          if (match) {
            return item.qty > 1 ? { ...item, qty: item.qty - 1 } : null;
          }
          return item;
        })
        .filter(Boolean); // remove nulls

      return updatedItems;
    } catch (err) {
      return rejectWithValue(err.message || "Failed to decrease quantity");
    }
  }
);


// Slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
    cartbarOpen: false, 
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
    ,
    toggleCartbar: (state) => {
      state.cartbarOpen = !state.cartbarOpen;
    },
    openCartbar: (state) => {
      state.cartbarOpen = true;
    },
    closeCartbar: (state) => {
      state.cartbarOpen = false;
    },
    clearCart: (state) => {
      state.items = [];
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
      })

      .addCase(IncreaseQty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(IncreaseQty.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(IncreaseQty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      

      .addCase(DecreaseQty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(DecreaseQty.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(DecreaseQty.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      ;
  
  }
});

export const { updateQuantity , toggleCartbar, openCartbar, closeCartbar , clearCart  } = cartSlice.actions;
export default cartSlice.reducer;