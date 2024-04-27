import LayOut from "@/component/LayOut";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function bannerDetail(){
    const [detail, setDetail] = useState({});
    const route = useRouter();

    useEffect(()=>{
        const getBanner = async ()=>{
            const resp = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banner/${route.query.id}`,{
                headers: {apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c"},
            }); 
            setDetail(resp.data.data);
            }
            if (route.query.id) getBanner();
    }, [route.query.id]);

    return(
        <LayOut>
            <div className=" container mx-auto tengah-detail gap-5 border border-dark p-5 m-5" style={{width:"40%"}}>
                <img src={detail.imageUrl} alt={detail.name} className="img-detail mx-auto"/>
                <div>
                    <p className="fw-bold fs-2 ps-4 text-start">Name: {detail.name}</p>
                </div>
            </div>
        </LayOut>
    )
}