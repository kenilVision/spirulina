import axiosInstance from "../axios/axios";


export const GetproductbyCategories = async (query) =>{    

    try{
        const res = await axiosInstance.get(`/product/get?${query}`);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}



