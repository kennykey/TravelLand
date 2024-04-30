'use client'
import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AOS from "aos";

export default function BannerPage(){
    const [banner, setBanner] = useState([])
    const {getData} = useGetData();
    const route = useRouter();
    useEffect(() => {
      getData(`banners`).then((res) => setBanner(res.data.data));
      AOS.init({});
  }, []);
    return(
        <section>
        <div className="my-5">
          <div className="container px-4 pb-4" data-aos="fade-down-right">
              <h5 className="text-primary">Destinasi terkenal</h5>
              <h5 className="text-start fw-bold fs-2"><i class='bx bxs-plane-alt'></i> Destinasi Yang Paling Populer</h5>
            </div>
            <div className="container-fluid gap-4 tengah" data-aos="flip-up" style={{flexWrap:"wrap", width:"90%",alignItems:"flex-start", justifyContent:"flex-start"}}>
            {banner.map((bann)=>(
              <div key={bann.id}>
                <button aria-label={bann.name} onClick={()=>route.push(`/detail/banner/${bann.id}`)}>
                    <div className="card" style={{width:"16rem"}}>
                      <img src={bann.imageUrl} alt={bann.name} className="card-img" style={{height:"11rem"}}/>
                      <div className="cardText">
                        <h5 className="card-title">{bann.name}</h5>
                      </div>
                    </div>
                </button>
              </div>
                
            ))}
            </div>
        </div>
      </section>
    )
}