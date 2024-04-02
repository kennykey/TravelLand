import axios from "axios";
import { useRouter } from "next/router";
import LayOut from "../component/LayOut";
import 'boxicons/css/boxicons.min.css';

export async function getServerSideProps(){
  const resp = await axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners',{
    headers:{
      apiKey:'24405e01-fbc1-45a5-9f5a-be13afcd757c'
    },
  });
  return {props:{banner:resp.data.data}};
}

export default function Home({banner,promo}) {
  const route = useRouter();
  return (
    <LayOut>
      <section>
        <div className="container-fluid row tengah">
          <div className="container col-md-6 text-start" style={{paddingLeft:"150px"}}>
              <h5 className="butter text-secondary fs-6">Relax & Enjoy the vacation</h5>
              <h1 className="fw-bold">Choose <span style={{color:"#0d6efd"}}>Travel And Books</span> Your Hotel With Us</h1>
              <p className="text-muted">Lorem ipsum dolor sit amet consectetur. Hac consequat hac arcu sed. Lectus ante ut in mattis ornare commodo nisi. Tortor tincidunt fames quam fusce convallis eget pulvinar.</p>
              <div className="d-flex gap-3">
                  <button className="btn btn-primary">Pesan Sekarang</button>
                  <button className="btn btn-outline-primary rounded-pill"><i class='bx bx-right-arrow' ></i> Lihat Detail</button>
              </div>
          </div>
          <div className="container col-md-6 tengah">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner ps-5" style={{width:"350px"}}>
                      <div className="carousel-item active tengah">
                          <img src="landing2.jpg" className="d-block dash" alt="part2"/>
                      </div>
                      <div className="carousel-item tengah">
                          <img src="landing.jpg" className="d-block dash" alt="part"/>
                      </div>
                      <div className="carousel-item tengah">
                          <img src="landing3.jpg" className="d-block dash" alt="part3"/>
                      </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="container-fluid tengah my-5 gap-3">
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
          <div className="container px-4">
            <h5 className="text-primary italic">Destinasi terkenal</h5>
            <h2 className="text-start fw-bold"><i class='bx bxs-plane-alt'></i> Destinasi Yang Paling Populer</h2>
          </div>
        <div className="container-fluid gap-4 tengah" style={{flexWrap:"wrap", width:"90%"}}>
        {banner.map((bann)=>(
          <div className="card" style={{width:"16rem"}}>
              <img src={bann.imageUrl} alt={bann.name} className="card-img" style={{height:"11rem"}}/>
          </div>
        ))}
        </div>
      </section>
    </LayOut>
  );
}
