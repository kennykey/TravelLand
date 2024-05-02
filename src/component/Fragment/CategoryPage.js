import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';


export default function CategoryPage(){
    const [categories, setCategories] = useState([])
    const route = useRouter();
    const {getData} = useGetData();

    useEffect(()=>{
        getData(`categories`).then((resp)=>setCategories(resp.data.data));
    })

    return(
        <contaiiner>
            <div className="container px-4 tengah my-5">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    className="mySwiper">    
                    {categories.length > 0 && (
                        categories.map((res)=>(
                        <SwiperSlide>
                        <div key={res.id}>
                            <button onClick={()=> route.push(`/detail/category/${res.id}`)} style={{width:"100%"}}>
                                <Image src={res.imageUrl} alt={res.name} width={1000} height={400}/>
                            </button>
                        </div>
                        </SwiperSlide>
                        ))
                    )}  
                </Swiper>
            </div>
        </contaiiner>
    )
}