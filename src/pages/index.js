"use client"
import AOS from "aos";
import axios from "axios";
import LayOut from "../component/LayOut";
import { useEffect } from "react";
import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export async function getServerSideProps(){
  const bannResp = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners',{
    headers:{
      apiKey:'24405e01-fbc1-45a5-9f5a-be13afcd757c'
    },
  });

  const promoResp = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos',{
    headers:{
      apiKey:'24405e01-fbc1-45a5-9f5a-be13afcd757c'
    },
  });

  const categoryResp = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories',{
    headers:{
      apiKey:'24405e01-fbc1-45a5-9f5a-be13afcd757c'
    },
  });

  const activityResp = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities',{
    headers:{
      apiKey:'24405e01-fbc1-45a5-9f5a-be13afcd757c'
    },
  });

  return {
      props:{
        banner:bannResp.data.data,
        promos:promoResp.data.data,
        category:categoryResp.data.data,
        activity:activityResp.data.data
      }
    };
}

export default function Home({banner,promos,category,activity}) {
  useEffect(() => {
    AOS.init({});
  }, []);

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
          <div className="container px-4" data-aos="fade-down-right">
              <h5 className="text-primary italic">Destinasi terkenal</h5>
              <h2 className="text-start fw-bold"><i class='bx bxs-plane-alt'></i> Destinasi Yang Paling Populer</h2>
            </div>
            <div className="container-fluid gap-4 tengah" data-aos="flip-up" style={{flexWrap:"wrap", width:"90%"}}>
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
              <div className="container px-4 text-end">
                <h5 className="text-primary italic">Promo saat ini</h5>
                <h2 className="fw-bold">Promo yang paling diminati <i class='bx bxs-purchase-tag-alt'></i></h2>
              </div>
              <div className="container-fluid gap-4 tengah" style={{flexWrap:"wrap", width:"90%"}}>
                <Swiper
                  modules={[Virtual, Navigation, Pagination]}
                  slidesPerView={3}
                  spaceBetween={30}
                  navigation={true}
                  virtual
                >
                  {promos.map((prom) => (
                    <SwiperSlide>
                      <img src={prom.imageUrl} className="card-img"/>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
          </div>
      </section>
      
      <section>
          <div className="my-5">
              <div className="container px-4">
                <h5 className="text-primary italic">Categories lokasi</h5>
                <h2 className="text-start fw-bold"><i class='bx bxs-category'></i> Categories berdasarkan negara</h2>
              </div>
              <div className="container-fluid gap-4 tengah" style={{flexWrap:"wrap", width:"90%"}}>
                {category.map((cat)=>(
                    <div>
                      <img src={cat.imageUrl} className="card-img" style={{height:"11rem"}}/>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      <section>
          <div className="my-5">
              <div className="container px-4 text-end">
                <h5 className="text-primary italic">Activities yang tersedia</h5>
                <h2 className="fw-bold">Activities yang bisa dikunjungi <i class='bx bxs-calendar'></i></h2>
              </div>
              <div className="container-fluid gap-4 tengah" style={{flexWrap:"wrap", width:"90%"}}>
                {activity.map((acti)=>(
                    <div>
                      <img src={acti.imageUrls} className="card-img" style={{height:"11rem"}}/>
                    </div>
                  ))}
              </div>
          </div>
      </section>

      <hr className="solid-border mt-5"/>
    </LayOut>
  );
}
