import LayOut from "@/component/LayOut";
import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function ActivityDetail(){
    const [detail, setDetail] = useState([]);
    const route = useRouter();
    const {getData} = useGetData();

    useEffect(()=>{
        getData(`activity/${route.query.id}`).then((res)=>setDetail(res.data.data));
    }, [])

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