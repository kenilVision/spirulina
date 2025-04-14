import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const { name, options } = action.payload; // options is the selected variant object
      const existingItem = state.find(
        (item) =>
          item.name === name &&
          JSON.stringify(item.options) === JSON.stringify(options) // Comparing options to check if the same variant exists
      );

      if (existingItem) {
        existingItem.qty += 1; // Increase quantity if the variant exists
      } else {
        state.push({ ...action.payload, qty: 1 }); // Add new item if variant doesn't exist
      }
    },

    addwithQuantity: (state, action) => {
      const { name, options, qty } = action.payload; // options is the selected variant
      const existingItemIndex = state.findIndex(
        (item) =>
          item.name === name &&
          JSON.stringify(item.options) === JSON.stringify(options) // Comparing options to check if the same variant exists
      );

      if (existingItemIndex !== -1) {
        // Replace the existing item with the updated one
        state[existingItemIndex] = { ...action.payload, qty };
      } else {
        // Add a new item with given quantity if not present
        state.push({ ...action.payload, qty });
      }
    },

    remove: (state, action) => {
      return state.filter(
        (item) =>
          item.id !== action.payload.id ||
          JSON.stringify(item.options) !== JSON.stringify(action.payload.options) 
      );
    },
  },
});

export const { add, remove, addwithQuantity } = CartSlice.actions;
export default CartSlice.reducer;


