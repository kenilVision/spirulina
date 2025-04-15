import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios"; // Adjust the import path as necessary



export const signupUser = createAsyncThunk("user/signup", async (formData, { rejectWithValue }) => {
  try {
    console.log(formData)
    const res = await axiosInstance.post("/auth/register", formData);
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    throw rejectWithValue(err.response?.data || err);
  }
});

export const loginUser = createAsyncThunk("user/login", async (formData, { rejectWithValue }) => {
  try {
    console.log(formData);
    const res = await axiosInstance.post("/auth/login", formData);
    localStorage.setItem("token", res.data.data.token); 
    const userData = res.data.data;
    return userData;
  } catch (err) {
    throw rejectWithValue(err.response?.data || err);
  }
});




const user = createSlice({
  name: "user",
  initialState: {
    _id: null,
    firstname: "",
    lastname: "",
    fullname: "",
    email: "",
    phone: "",
    token: "",
    isActive: false,
    address: [],
    login: false,
    loading: false,
    error: null
  },
  reducers: { 
    setAddress: (state, action) => {
      let { address } = action.payload;

      // If no addresses exist, set as default
      if (state.address.length === 0) {
        address.default = true;
      }
    
      // If this address is marked default, unset others
      if (address.default) {
        state.address = state.address.map((addr) => ({
          ...addr,
          default: false,
        }));
      }
    
      state.address.push(address);
    },
    updateAddress: (state, action) => {
      const { addressid, updatedAddress } = action.payload;
      const index = state.address.findIndex((address) => address.addressid === addressid);
    
      if (index !== -1) {
        if (updatedAddress.default === true) {
          // Set this one to default and remove default from others
          state.address = state.address.map((addr, i) => {
            if (addr.addressid === addressid) {
              return { ...addr, ...updatedAddress };
            }
            return { ...addr, default: false };
          });
        } else {
          // Just update the specific address
          state.address[index] = { ...state.address[index], ...updatedAddress };
        }
      }
  },
    removeAddress: (state, action) => {
      const { addressid } = action.payload;
      state.address = state.address.filter((address) => address.addressid !== addressid);
    },
    logout: (state) => {
      localStorage.removeItem('token');
      return {
        ...state,
        _id: null,
        firstname: "",
        lastname: "",
        fullname: "",
        email: "",
        phone: "",
        token: "",
        isActive: false,
        login: false,
        address: [],
      };
  },
},
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => { 
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const user = action.payload;
        state._id = user._id;
        state.firstname = user.firstname;
        state.lastname = user.lastname;
        state.fullname = user.fullname;
        state.email = user.email;
        state.phone = user.phone;
        state.token = user.token; 
        state.isActive = user.isActive;
        state.address = user.address || [];
        state.login = true;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const {setAddress ,logout , updateAddress, removeAddress} = user.actions;
export default user.reducer;


