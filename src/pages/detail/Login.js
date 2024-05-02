"use client"
import { Container,Form,Button } from "react-bootstrap"
import useAuth from "@/useApi/useAuth";
import React ,{ useState } from "react"
import LayOut from "@/component/LayOut";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export default function Login(){
    const {Auth,loading} = useAuth();
    const {login} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    const handleLogin = async (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        Auth(
            'login',
            {email,password}
        );
             
        if(!email && !password) return
        dispatch(Login(email,password));
    };

    if(loading){
        return(
            <h2 className="text-center fw-bold">
                Loading...
            </h2>
        )
    }
    console.log(login);
    return ( 
        <LayOut>
            <Container className="d-flex m-5 tengah">
                <Container>
                    <Image src="/sign_in.png" alt="Sign_in" className="img-fluid" height={400} width={400}/>
                </Container>
                <Container className="m-5">
                    <Form onSubmit={handleLogin} style={{width:"400px"}}>
                        <h4 className="text-center fw-bold mb-3">Login</h4>
                        <Form.Group className="mb-3"  controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Email" name="email" id="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3"  controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Enter Password" name="password" id="password"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Container>
        </LayOut>
     );
}
 
