"use client"
import LayOut from "@/component/LayOut";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useGetData from "@/useApi/useGetData";
import Image from "next/image";
export default function promoDetail(){
    const [detail, setDetail] = useState([]);
    const route = useRouter();
    const {getData} = useGetData();

    useEffect(()=>{
        getData(`promo/${route.query.id}`).then((res)=>setDetail(res.data.data));
    }, [])


    return(
        <LayOut>
            <div key={detail.id} className=" container mx-auto tengah-detail gap-5 border border-dark p-5 m-5" style={{width:"40%"}}>
                <Image src={detail.imageUrl} alt={detail.name} className="img-detail mx-auto" height={300} width={300}/>
                <div className="ps-4 text-start">
                    <p>Name: {detail.title}</p>
                    <p>description: {detail.description}</p>
                    <p>Term Condition: {detail.terms_condition}</p>
                    <p>Code: {detail.promo_code}</p>
                    <p>Promo Discroun Price: {detail.promo_discount_price}</p>
                    <p>Minimum Claim Price: {detail.minimum_claim_price}</p>
                    <p>Create at: {detail.createdAt}</p>
                    <p>Update at: {detail.updatedAt}</p>
                </div>
            </div>
        </LayOut>
    )
}