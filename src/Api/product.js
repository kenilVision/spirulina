import axiosInstance from "../axios/axios";


export const GetproductbyCategories = async (categoryId) =>{    

    try{
        const res = await axiosInstance.get(`/product/get?categoryId=${categoryId}`);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}



