"use client"
import LayOut from "../component/LayOut";
import { useRouter } from "next/router";
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper,SwiperSlide } from "swiper/react";
import BannerPage from "@/component/Fragment/BannerPage";
import PromoPage from "@/component/Fragment/PromoPage";

export default function Home() {
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
                  <button className="btn btn-primary" onClick={()=>route.push('/activity')}>pesan</button>
                  <button className="btn btn-outline-primary rounded-pill"><i class='bx bx-right-arrow' ></i>Detail</button>
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

      <BannerPage/>
      
      <PromoPage/>
      <hr className="solid-border mt-5"/>
    </LayOut>
  );
}
