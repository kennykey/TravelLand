import { Navbar,Container,Nav } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Navbars(){
    const route = useRouter();
    return(
        <div className="mb-5" data-aos="fade-down">
        <Navbar  bg="ligth" variant="ligth">
            <Container className="py-0">
                <Navbar.Brand className="fw-bold fs-4" onClick={() => route.push("/")} style={{cursor:"pointer"}}>Travel<span style={{color:"#0d6efd"}}>Land</span></Navbar.Brand>
                <div><input placeholder="search" className="search-navbar"/></div>
                <Nav className="gap-3">
                    <button className="btn btn-outline-light text-black" onClick={()=> route.push("/detail/Login")}>Login</button>
                    <button className="btn btn-primary" onClick={()=> route.push("/detail/Register")}>Register</button>
                </Nav>
            </Container>
        </Navbar>
        <hr className="solid-border my-0"/>
        <Navbar  bg="ligth" variant="ligth">
            <Container className="py-0">
                <Nav className="gap-3">
                    <Nav.Link className="btn btn-outline-light" onClick={() => route.push("promo")}>Promo</Nav.Link>
                    <Nav.Link className="btn btn-outline-light" onClick={() => route.push("activity")}>Activities</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}