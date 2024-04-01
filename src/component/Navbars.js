import { Navbar,Container,Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import 'bootstrap/dist/css/bootstrap.min.css';
 
export default function Navbars(){
    const route = useRouter();
    return(
        <div>
        <Navbar  bg="ligth" variant="ligth">
            <Container className="py-0">
                <Navbar.Brand>Travel Land</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link onClick={()=> route.push("/")}>Home</Nav.Link>
                    <Nav.Link onClick={()=> route.push("/")}>Features</Nav.Link>
                    <Nav.Link onClick={()=> route.push("/")}>Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <hr className="solid-border my-0"/>
        </div>
    )
}