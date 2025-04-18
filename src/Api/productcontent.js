

import axiosInstance from "../axios/axios";


export const GetproductContent = async (id) =>{    

    try{
        const res = await axiosInstance.get(`product-content/product-by-product-content/${id}`);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}



