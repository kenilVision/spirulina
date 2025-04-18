import axiosInstance from "../axios/axios";


export const Getvideos = async () =>{    

    try{
        const res = await axiosInstance.get(`/product/videos`);
        return res.data;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}



