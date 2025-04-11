import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {const existingItem = state.find(item => item.name === action.payload.name);

        if (existingItem) {
          existingItem.qty += 1; 
        } else {
          state.push({ ...action.payload, qty: 1 });
        }
      },
    remove: (state, action) => {
      return state.filter(item => item.id !== action.payload); // Removes item by ID
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
