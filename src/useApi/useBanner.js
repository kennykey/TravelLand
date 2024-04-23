import { useState } from "react";
import axios from "axios";

export default function useBanner(){
    const [loading,setLoading] = useState(false);
    const [banner,setBanner] = useState([]);

    const getBanner = async() =>{
        setLoading(true);
        try{
            const resp = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners',{
                headers:{
                    apiKey:'24405e01-fbc1-45a5-9f5a-be13afcd757c'
                },
            });
            setBanner(resp.data.data);
            setLoading(false);
        }catch(error){
            console.log(error);
        }
    }
    return {getBanner,loading,banner};
}