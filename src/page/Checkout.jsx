import React, { useEffect } from "react";
import { useState } from "react";
import Form from "../component/checkout/form/Form";
import Bill from "../component/checkout/Bill";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../Slice/user";
import Cookies from "js-cookie";
import { makeOrder } from "../Api/order";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Slice/cart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Getaddress,
  createAddress,
  deleteaddress,
  UpdateAddress,
} from "../Api/address";
import { getOrder } from "../Slice/order";
function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.User);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [orderError, setOrderError] = useState()

  const [selectedType, setSelectedType] = useState("same");
  const [selectedAddressId, setSelectedAddressId] = useState([]);
  const [selected, setSelected] = useState("COD");
  const [formData, setFormData] = useState({
    country: "India",
    fullname: "",
    phone: "",
    zip: "",
    address: "",
    address2: "",
    isDefault: false,
    state: "",
    city: "",
  });
  // -----------------------------------------------------------------payout api call and verification
  const submit = async () => {
    try {
      let addressIdToUse = selectedAddressId;

      if (selectedType === "different") {
        const validateForm = () => {
          const newErrors = {};
      
          if (!formData.fullname || formData.fullname.trim() === '') {
            newErrors.fullname = 'Full name is required';
          } else if (formData.fullname.length < 3) {
            newErrors.fullname = 'Full name must be at least 3 characters';
          }
      
          if (!formData.phone || formData.phone.trim() === '') {
            newErrors.phone = 'Phone number is required';
          } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
          }
      
          if (!formData.zip || formData.zip.trim() === '') {
            newErrors.zip = 'Postal code is required';
          } else if (!/^\d{6}$/.test(formData.zip)) {
            newErrors.zip = 'Postal code must be 6 digits';
          }
      
          if (!formData.address || formData.address.trim() === '') {
            newErrors.address = 'Address line 1 is required';
          } else if (formData.address.length < 5) {
            newErrors.address = 'Address must be at least 5 characters';
          }
          if (!formData.address2 || formData.address.trim() === '') {
            newErrors.address2 = 'Address line 2 is required';
          } else if (formData.address2.length < 5) {
            newErrors.address2 = 'Address must be at least 5 characters';
          }
      
          if (!formData.state || formData.state.trim() === '') {
            newErrors.state = 'State is required';
          }
      
          if (!formData.city || formData.city.trim() === '') {
            newErrors.city = 'City is required';
          }
      
          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
        };
      
        const isValid = validateForm();
        if (!isValid) {
          toast.error("Please fix the errors in the billing address form", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          return;
        }
  
        if (formData._id) {
          await UpdateAddress(formData);
          addressIdToUse = formData._id;
        } else {
          const addressResponse = await createAddress(formData);
          addressIdToUse = addressResponse._id;
        }
      } 
        // Check if address is selected when using "same as shipping address"
        if (
          !addressIdToUse ||
          addressIdToUse == null ||
          addressIdToUse == undefined ||
          (Array.isArray(addressIdToUse) && addressIdToUse.length === 0)
        ) {
          toast.error("Please provide valid address form", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          return;
        }

      const items = cart
        .map((item) => {
          if (item.data.type === "product") {
            return {
              productId: item.data._id,
              variantId: item.data.variants.variantid,
              type: "product",
              quantity: item.qty,
            };
          } else if (item.data.type === "combo") {
            return {
              comboId: item.data._id,
              type: "combo",
              quantity: item.qty,
            };
          }
          return null;
        })
        .filter(Boolean);

      const orderData = {
        addressId: addressIdToUse,
        items,
        paymentMethod: selected,
      };
      console.log(orderData);
      const response = await makeOrder(orderData);

      if (response?.success) {
        toast.success(response?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(getOrder());
        navigate("/");
        dispatch(clearCart())
      }
      else {
        toast.error(response?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      
    }
    } catch (error) {

      toast.error(error?.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     
      return;
    }
  };


  useEffect(() => {
    const accessToken = Cookies.get("Token");
    if (accessToken) {
      dispatch(fetchUserProfile());
    }
  }, []);

  // ---------------------------------------total price 
  const subtotal = cart.reduce((sum, product) => {
    if (product.data.type === "product") {
      return sum + product.data.variants.price * product.qty;
    } else if (product.data.type === "combo") {

      return sum + product.data.price * product.qty;
    }
    return sum;
  }, 0);

  const total = subtotal;

  return (
    <div className="max-w-full  flex flex-col lg:flex-row h-full mx-auto ">
      <div className="w-auto lg:w-1/2 h-full flex justify-center lg:justify-end bg-[#ffffff]">
        <div className=" w-auto lg:w-[660px] p-[38px]">
          <Form
            user={user}
            selectedAddressId={selectedAddressId}
            setSelectedAddressId={setSelectedAddressId}
            selected={selected}
            setSelected={setSelected}
            submit={submit}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            formData={formData}
            setFormData={setFormData}
            cart={cart}
            total={total}
            errors={errors}
            setErrors={ setErrors}
          />
        </div>
      </div>

      <div className=" w-auto lg:w-1/2 hidden lg:block lg:fixed lg:right-0 lg:top-0 right-0 top-0 lg:h-screen bg-[#F3F8F4] overflow-y-auto">
        <div>
          <Bill cart={cart} total={total} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
