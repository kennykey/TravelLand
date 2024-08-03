"use client"
import {Container,Form} from "react-bootstrap"
import useAuth from "@/useApi/useAuth";
import React from "react"
import LayOut from "@/component/LayOut";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";

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
    return ( 
        <LayOut>
            <Container className="d-flex m-5 tengah">
                <Container>
                    <Image src="/sign_in.png" alt="Sign_in" className="img-fluid" height={400} width={400}/>
                </Container>
                <Container className="m-5">
                    <Form onSubmit={handleLogin} style={{width:"400px"}}>
                        <h4 className="text-center fw-bold mb-3">Login</h4>
                        <Input id='email' name='email' type='email'/>
                        <Input id='password' name='password' type='password'/>
                        <Button type='submit' className='btn btn-primary w-100'>
                            Submit
                        </Button>
                    </Form>
                </Container>
            </Container>
        </LayOut>
     );
}
 
