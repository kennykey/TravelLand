"use client"
import LayOut from "@/component/LayOut";
import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function ActivityDetail(){
    const [detail, setDetail] = useState([]);
    const route = useRouter();
    const {getData} = useGetData();

    useEffect(()=>{
        getData(`activity/${route.query.id}`).then((res)=>setDetail(res.data.data));
    }, [])

    console.log(detail);

    return(
        <LayOut>
            <div key={detail.id} className=" container mx-auto tengah-detail gap-5 border border-dark p-5 m-5" style={{width:"40%"}}>
                <Image src={detail.imageUrls} alt={detail.title} height={300} width={300} className="img-detail mx-auto"/>
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
                    <div dangerouslySetInnerHTML={{__html:detail.location_maps}}/>
                    <p>Create at: {detail.createdAt}</p>
                    <p>Update at: {detail.updatedAt}</p>
                </div>
            </div>
        </LayOut>
    )
}