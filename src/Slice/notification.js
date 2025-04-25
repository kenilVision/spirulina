// notificationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    isVisible: false,
    message: '',
    productUrl: '',
    timeoutId: null // Store timeout reference
  },
  reducers: {
    showNotification: (state, action) => {
      // Clear any existing timeout
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
      }
      
      state.isVisible = true;
      state.message = action.payload.message;
      state.productUrl = action.payload.productUrl || '';
      state.timeoutId = action.payload.timeoutId || null;
    },
    hideNotification: (state) => {
      state.isVisible = false;
      state.timeoutId = null;
    },
    clearNotificationTimeout: (state) => {
      if (state.timeoutId) {
        clearTimeout(state.timeoutId);
        state.timeoutId = null;
      }
    }
  }
});

export const { showNotification, hideNotification, clearNotificationTimeout } = notificationSlice.actions;

// Action creator that handles auto-hiding
export const showTimedNotification = (payload) => (dispatch) => {
  const timeoutId = setTimeout(() => {
    dispatch(hideNotification());
  }, 3000); // 5 seconds
  
  dispatch(showNotification({
    ...payload,
    timeoutId
  }));
};

export default notificationSlice.reducer;