import { Navbar,Container,Nav } from "react-bootstrap";
import { useRouter } from "next/router";


 
export default function Navbars(){
    const route = useRouter();
    return(
        <div className="mb-5">
        <Navbar  bg="ligth" variant="ligth">
            <Container className="py-0">
                <Navbar.Brand className="fw-bold fs-4">Travel<span style={{color:"#0d6efd"}}>Land</span></Navbar.Brand>
                <div><input placeholder="search" className="search-navbar"/></div>
                <Nav className="gap-3">
                    <button className="btn" onClick={()=> route.push("/detail/login")}>Login</button>
                    <button className="btn btn-primary" onClick={()=> route.push("/detail/register")}>Register</button>
                </Nav>
            </Container>
        </Navbar>
        <hr className="solid-border my-0"/>
        <Navbar  bg="ligth" variant="ligth">
            <Container className="py-0">
                <Nav className="gap-3">
                    <Nav.Link >Kereta<i class='bx bxs-chevron-down'></i></Nav.Link>
                    <Nav.Link >Pesawat<i class='bx bxs-chevron-down'></i></Nav.Link>
                    <Nav.Link >Bus<i class='bx bxs-chevron-down'></i></Nav.Link>
                    <Nav.Link >Kapal<i class='bx bxs-chevron-down'></i></Nav.Link>
                    <Nav.Link >Mobil rental<i class='bx bxs-chevron-down'></i></Nav.Link>
                    <Nav.Link >Lainnya<i class='bx bxs-chevron-down'></i></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}