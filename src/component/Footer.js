import { Nav } from "react-bootstrap"


export default function Footer(){
    return(
        <div className="container mt-5" data-aos="fade-up">
            <div className="row d-flex text-muted">
                <div className="col-md-6">
                    <h4 className="text-black">Travel<span style={{color:"#0d6efd"}}>Land</span></h4>
                    <p className="pe-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam iure nisi quam dolor 
                    iste quibusdam itaque maxime amet quia, dolorem odit tenetur expedita harum. Repudiandae odit ratione non 
                    consequuntur modi. <span className="text-primary">Baca Selengkapnya</span></p>
                    <p><i class='bx bx-phone-call'></i> 0852 1122 3344</p>
                    <p><i class='bx bx-envelope'></i> wJg2h@example.com</p>
                    <p><i class='bx bx-location-plus'> jakarta, indonesia</i></p>
                    <p><i class='bx bx-printer'></i> +62 123 456</p>
                </div>
                <div className="col-md-2">
                    <h5 className="text-black">Tentang</h5>
                    <Nav.Link onClick={() => alert("Tentang Kami")}>Tentang Kami</Nav.Link>
                    <Nav.Link onClick={() => alert("Blog")}>Blog</Nav.Link>
                    <Nav.Link onClick={() => alert("Berita")}>Berita</Nav.Link>
                    <Nav.Link onClick={() => alert("Karir")}>Karir</Nav.Link>
                    <Nav.Link onClick={() => alert("Pekerjaan")}>Pekerjaan</Nav.Link>
                    <Nav.Link onClick={() => alert("Galeri")}>Galeri</Nav.Link>
                    <Nav.Link onClick={() => alert("Afilliasi")}>Afilliasi</Nav.Link>
                </div>
                <div className="col-md-2">
                    <h5 className="text-black">Support</h5>
                    <Nav.Link onClick={() => alert("Kontak Kami")}>Kontak Kami</Nav.Link>
                    <Nav.Link onClick={() => alert("Online chat")}>Online chat</Nav.Link>
                    <Nav.Link onClick={() => alert("Whats app")}>Whats app</Nav.Link>
                    <Nav.Link onClick={() => alert("Telegram")}>Telegram</Nav.Link>
                    <Nav.Link onClick={() => alert("Tiket")}>Tiket</Nav.Link>
                    <Nav.Link onClick={() => alert("Call center")}>Call center</Nav.Link>
                    <Nav.Link onClick={() => alert("Bantuan")}>Bantuan</Nav.Link>
                </div>
                <div className="col-md-2">
                    <h5 className="text-black">FAQ</h5>
                    <Nav.Link onClick={() => alert("Akun")}>Akun</Nav.Link>
                    <Nav.Link onClick={() => alert("Organisasi")}>Organisasi</Nav.Link>
                    <Nav.Link onClick={() => alert("Order")}>Order</Nav.Link>
                    <Nav.Link onClick={() => alert("Pembayaran")}>Pembayaran</Nav.Link>
                    <Nav.Link onClick={() => alert("Pengembalian")}>Pengembalian</Nav.Link>
                    <Nav.Link onClick={() => alert("Copyright")}>Copyright</Nav.Link>
                    <Nav.Link onClick={() => alert("Tentang Kami")}>Bahasa</Nav.Link>
                </div>
            </div>
            <div className="text-muted text-center">
                <p>	&copy; 2024 kennykey, All rights reserved.</p>
            </div>
        </div>
    )
}