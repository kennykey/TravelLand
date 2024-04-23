"use client"
import AOS from "aos";
import LayOut from "../component/LayOut";
import { useEffect } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from "next/router";
import useBanner from "@/useApi/useBanner";
import usePromo from "@/useApi/usePromo";

export default function Home() {
  useEffect(() => {
    AOS.init({});
    getBanner();
    getPromo()
  }, []);

  const {getBanner, banner} = useBanner();
  const {getPromo, promo} = usePromo();
  const route = useRouter();

  return (
    <LayOut>
      <section>
        <div className="container-fluid row tengah">
          <div className="container col-md-6 text-start" data-aos="fade-right" style={{paddingLeft:"150px"}}>
              <h5 className="butter text-secondary fs-6">Relax & Enjoy the vacation</h5>
              <h1 className="fw-bold">Choose <span style={{color:"#0d6efd"}}>Travel And Books</span> Your Hotel With Us</h1>
              <p className="text-muted">Lorem ipsum dolor sit amet consectetur. Hac consequat hac arcu sed. Lectus ante ut in mattis ornare commodo nisi. Tortor tincidunt fames quam fusce convallis eget pulvinar.</p>
              <div className="d-flex gap-3">
                  <button className="btn btn-primary">Pesan Sekarang</button>
                  <button className="btn btn-outline-primary rounded-pill"><i class='bx bx-right-arrow' ></i> Lihat Detail</button>
              </div>
          </div>
          <div className="container col-md-6 tengah" data-aos="fade-left" style={{width:"400px"}}>
            <Swiper
              modules={[Virtual, Pagination ,Autoplay]}
              slidesPerView={1}
              autoplay={{delay: 2500}}
              pagination={{clickable: true}}
              virtual>
                <SwiperSlide><img src="landing2.jpg" className="d-block dash" alt="part2"/></SwiperSlide>
                <SwiperSlide><img src="landing.jpg" className="d-block dash" alt="part"/></SwiperSlide>
                <SwiperSlide><img src="landing3.jpg" className="d-block dash" alt="part3"/></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      
      <section>
        <div className="container-fluid tengah my-5 gap-3" data-aos="flip-up">
            <div class="card logo" style={{border:"none"}}>
                <img src="pesawat1.svg" class="card-img" alt="logo1"/>
            </div>
            <div class="card logo" style={{border:"none"}}>
                <img src="pesawat2.svg" class="card-img" alt="logo1"/>
            </div>
            <div class="card logo" style={{border:"none"}}>
                <img src="pesawat3.svg" class="card-img" alt="logo1"/>
            </div>
            <div class="card logo" style={{border:"none"}}>
                <img src="pesawat4.svg" class="card-img" alt="logo1"/>
            </div>
            <div class="card logo" style={{border:"none"}}>
                <img src="pesawat5.svg" class="card-img" alt="logo1"/>
            </div>
        </div>
      </section>

      <section>
        <div className="my-5">
          <div className="container px-4 pb-4" data-aos="fade-down-right">
              <h5 className="text-primary italic">Destinasi terkenal</h5>
              <h2 className="text-start fw-bold"><i class='bx bxs-plane-alt'></i> Destinasi Yang Paling Populer</h2>
            </div>
            <div className="container-fluid gap-4 tengah" data-aos="flip-up" style={{flexWrap:"wrap", width:"90%",alignItems:"flex-start", justifyContent:"flex-start"}}>
            {banner.map((bann)=>(
                <div className="card" style={{width:"16rem"}}>
                  <img src={bann.imageUrl} alt={bann.name} className="card-img" style={{height:"11rem"}}/>
                  <div className="cardText">
                    <h5 className="card-title">{bann.name}</h5>
                  </div>
                </div>
            ))}
            </div>
        </div>
      </section>

      <section>
          <div className="my-5">
              <div className="d-flex container px-4">
                <div className="container" style={{paddingTop:"40px"}}>
                  <button className="btn btn-primary" onClick={() => route.push("promo")}>More Detail</button>
                </div>
                <div className="container text-end">
                  <h5 className="text-primary italic">Promo saat ini</h5>
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
                      <button className="btn" onClick={()=>route.push(`/detail/${prom.id}`)}>
                        <img src={prom.imageUrl} style={{height:"24rem"}}/>
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
          </div>
      </section>

      <hr className="solid-border mt-5"/>
    </LayOut>
  );
}
