import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import Image from "next/image";
import AOS from "aos";

export default function PromoPageTwo(){
    const [promo, setPromo] = useState([])
    const {getData} = useGetData();
    const route = useRouter();
    useEffect(()=>{
        getData(`promos`).then((res)=>setPromo(res?.data?.data));
        AOS.init({});
    }, [])
    return(
        <section>
          <div className="container px-4 tengah wrap gap-3 my-5">
                {promo.length > 0 && (
                    promo.map((resp)=>(
                        <div key={resp.id}>
                            <button onClick={()=>route.push(`/detail/promo/${resp.id}`)}>
                                <Image src={resp.imageUrl} alt={resp.title} width={300} height={300} style={{height:"14rem"}}/>
                            </button>
                        </div> 
                    ))
                )}
            </div>
      </section>
    )
}