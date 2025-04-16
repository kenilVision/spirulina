import axiosInstance from "../axios/axios";


export const Getallcombo = async () =>{    

    try{
        const res = await axiosInstance.get(`/product-combo/get`);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}
export const Getonecombo = async (query) =>{    

    try{
        const res = await axiosInstance.get(`/product/get?${query}`);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}



