import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper,SwiperSlide } from "swiper/react";
import AOS from "aos";

export default function PromoPage(){
    const [promo, setPromo] = useState([])
    const {getData} = useGetData();
    const route = useRouter();
    useEffect(()=>{
        getData(`promos`).then((res)=>setPromo(res?.data?.data));
        AOS.init({});
    }, [])
    return(
        <section>
          <div className="my-5">
              <div className="d-flex container px-4">
                <div className="container" style={{paddingTop:"40px"}}>
                  <button className="btn btn-primary" onClick={() => route.push("promo")}>More Detail</button>
                </div>
                <div className="container text-end">
                  <h5 className="text-primary">Promo saat ini</h5>
                  <h2 className="fw-bold">Promo yang paling diminati <i class='bx bxs-purchase-tag-alt'></i></h2>
                </div>
              </div>
              <div className="container-fluid gap-4 tengah" style={{flexWrap:"wrap", width:"90%"}}>
                <Swiper
                  modules={[Virtual, Navigation, Pagination]}
                  slidesPerView={3}
                  spaceBetween={30}
                  navigation={true}
                  virtual
                >
                  {promo.map((prom) => (
                    <SwiperSlide>
                      <div key={prom.id}>
                        <button className="btn" aria-label={prom.title} onClick={()=>route.push(`/detail/promo/${prom.id}`)}>
                          <img src={prom.imageUrl} alt={prom.title} style={{height:"24rem"}}/>
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
          </div>
      </section>
    )
}