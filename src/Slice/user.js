import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";
import Cookies from "js-cookie";



export const signupUser = createAsyncThunk(
  "user/signup",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/auth/register", formData,{
        headers: {
          "Content-Type": "application/json"
        }}
      );
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/auth/login", formData,
        {
          headers: {
            "Content-Type": "application/json"
        }}
      );
      const userData = res.data;

      // Store token in cookie
      Cookies.set("Token", userData.token, { expires: 1 }); 

      return userData;
    } catch (err) {
      return rejectWithValue(err.response?.data || err);
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/auth/profile");
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err);
    }
  }
);

// --- Slice ---

const userSlice = createSlice({
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
    error: null,
  },
  reducers: {
    setAddress: (state, action) => {
      let { address } = action.payload;
      if (state.address.length === 0) {
        address.default = true;
      }
      if (address.default) {
        state.address = state.address.map(addr => ({
          ...addr,
          default: false,
        }));
      }
      state.address.push(address);
    },
    updateAddress: (state, action) => {
      const { addressid, updatedAddress } = action.payload;
      const index = state.address.findIndex(addr => addr.addressid === addressid);
      if (index !== -1) {
        if (updatedAddress.default === true) {
          state.address = state.address.map((addr) => {
            if (addr.addressid === addressid) {
              return { ...addr, ...updatedAddress };
            }
            return { ...addr, default: false };
          });
        } else {
          state.address[index] = { ...state.address[index], ...updatedAddress };
        }
      }
    },
    removeAddress: (state, action) => {
      const { addressid } = action.payload;
      state.address = state.address.filter(addr => addr.addressid !== addressid);
    },
    logout: (state) => {
      Cookies.remove("userToken"); // Remove token from cookie
      return {
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
        error: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
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
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
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
      });
  },
});

// --- Exports ---

export const {
  setAddress,
  updateAddress,
  removeAddress,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
