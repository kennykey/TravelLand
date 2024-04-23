import { useState } from "react"
import axios from "axios"

export default function usePromo(){
    const [loading,setLoading] = useState(false)
    const [promo,setPromo] = useState([]);

    const getPromo = async() =>{
        setLoading(true);
        try{
           const resp = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos`,{
                        headers:{
                            apiKey:'24405e01-fbc1-45a5-9f5a-be13afcd757c'
                        },
                    });
                setPromo(resp.data.data);
            setLoading(false);
        }catch(error){
            console.log(error);
        }
        
    }

    return {getPromo , loading, promo};
}