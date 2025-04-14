import { createSlice } from "@reduxjs/toolkit";


const user = createSlice({
  name: "user",
  initialState: {
    firstname:"Kenil",
    lastname:"Patel",
    email:"Kenilp1911@gmail.com",
    password:"9879758184",
    address:[
        { 
            addressid:17777376871,
            fullName: "Kenil Ptel",
            address:"123 Main St",
            address2:"Apt 4B",
            county:"India",
            zip:"396450",
            state:"Gujarat",
            city:"Ahmedabad",
            phone:"1234567890",
            default:true
        },
        {     
            addressid:168781871,
            fullName: "Kenil Pa",
            address:"123 Main St",
            address2:"Apt 4B",
            county:"India",
            state:"Gujarat",
            city:"Ahmedabad",
            zip:"335600",
            phone:"1234567890",
            default:false
        }
    ],
    login:true
  },
  reducers: { 
    setUser: (state, action) => {
      const { firstname, lastname, email, password } = action.payload;
      state.firstname = firstname;
      state.lastname = lastname;
      state.email = email;
      state.password = password;
      state.login = true;
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
      state.login = true;
      return true;
    },
    updateFullName: (state, action) => {
      const { first, last } = action.payload;
      if (first) state.firstname = first;
      if (last) state.lastname = last;
    },
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
  }
    },
    removeAddress: (state, action) => {
      const { addressid } = action.payload;
      state.address = state.address.filter((address) => address.addressid !== addressid);
    }
  }
);

export const {setUser, login, setAddress,updateFullName, updateAddress, removeAddress} = user.actions;
export default user.reducer;


