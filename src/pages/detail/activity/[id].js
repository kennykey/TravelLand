import LayOut from "@/component/LayOut";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ActivityDetail(){
    const [detail, setDetail] = useState({});
    const route = useRouter();

    useEffect(()=>{
        const getActivity = async ()=>{
            const resp = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activity/${route.query.id}`,{
                headers: {apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c"},
            }); 
            setDetail(resp?.data?.data);
            }
            if (route.query.id) getActivity();
    }, [route.query.id]);

    return(
        <LayOut>
            <div className=" container mx-auto tengah-detail gap-5 border border-dark p-5 m-5" style={{width:"40%"}}>
                <img src={detail.imageUrls} alt={detail.title} className="img-detail mx-auto"/>
                <div className="ps-5 text-start">
                    <p>Name: {detail.title}</p>
                    <p>Description: {detail.description}</p>
                    <p>Price: {detail.price}</p>
                    <p>Price Discount: {detail.price_discount}</p>
                    <p>Rating: {detail.rating}</p>
                    <p>Total Review: {detail.total_reviews}</p>
                    <p>Facilities: {detail.facilities}</p>
                    <p>Address: {detail.address}</p>
                    <p>Province: {detail.province}</p>
                    <p>City: {detail.city}</p>
                    {/* <iframe src={detail.location_maps}></iframe> */}
                    <p>Create at: {detail.createdAt}</p>
                    <p>Update at: {detail.updatedAt}</p>
                </div>
            </div>
        </LayOut>
    )
}