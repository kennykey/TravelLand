import LayOut from "@/component/LayOut";
import usePromo from "@/useApi/usePromo";
import useCategories from "@/useApi/useCategories";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function promo(){
    const {getPromo, promo} = usePromo();
    const {getCategories,categories} = useCategories();
    const route = useRouter();
    useEffect(()=>{
        getPromo();
        getCategories();
    },[])

    return( 
        <LayOut>
            <div className="container px-4 tengah my-5">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    className="mySwiper">    
                    {categories.length > 0 && (
                        categories.map((res)=>(
                        <SwiperSlide>
                        <div>
                            <img src={res.imageUrl} alt={res.name}/>
                        </div>
                        </SwiperSlide>
                        ))
                    )}  
                </Swiper>
            </div>

            <div className="container px-4 tengah wrap gap-3 my-5">
                {promo.length > 0 && (
                    promo.map((res)=>(
                        <button>
                            <img src={res.imageUrl} alt={res.title} style={{width:"16rem", height:"14rem"}}/>
                        </button>
                    ))
                )}
            </div>
        <hr/>
        </LayOut>
    )
}