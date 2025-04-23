import React, { useEffect } from "react";
import { useState } from "react";
import Form from "../component/checkout/form/Form";
import Bill from "../component/checkout/Bill";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../Slice/user";
import Cookies from "js-cookie";
import { makeOrder } from "../Api/order";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Getaddress,
  createAddress,
  deleteaddress,
  UpdateAddress,
} from "../Api/address";
function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.User);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("same");
  const [selectedAddressId, setSelectedAddressId] = useState([]);
  const [selected, setSelected] = useState("COD");
  const [formData, setFormData] = useState({
    country: "India",
    fullName: "",
    phone: "",
    zip: "",
    address1: "",
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
        if (formData._id) {
          await UpdateAddress(formData);
          addressIdToUse = formData._id;
        } else {
          const addressResponse = await createAddress(formData);
          addressIdToUse = addressResponse._id;
        }
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

      
    } catch (error) {
      console.error("Order creation failed:", error);
      setOrderError(
        error.message || "Failed to create order. Please try again."
      );

      return;
    } finally {
       toast.success("Successfully placed order", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
    }
  };
  useEffect(() => {
    const accessToken = Cookies.get("Token");
    if (accessToken) {
      console.log(accessToken);

      dispatch(fetchUserProfile());
    }
  }, []);

  // ---------------------------------------total item 
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
