"use client"
import { Container,Form,Button } from "react-bootstrap"
import React ,{ useState } from "react"
import LayOut from "@/component/LayOut";
import useAuth from "@/useApi/useAuth";
import { useDispatch } from "react-redux";
import Image from "next/image";


export default function Register() {
  const {Auth,loading} = useAuth();
  const dispatch = useDispatch();

  const handleRegister = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const passwordRepeat = e.target.passwordRepeat.value;
    const role = e.target.role.value;  
    const profilePictureUrl = e.target.profilePictureUrl.value;
    const phoneNumber = e.target.phoneNumber.value;

    Auth(
      'register',
      {email,name,password,passwordRepeat,role,profilePictureUrl,phoneNumber}
    )

    if(!email && !password) return
    dispatch(Logout(email,password));
  }

  if(loading){
    return(
        <h2 className="text-center fw-bold">
            Loading...
        </h2>
    )
  }

  return (
    <LayOut>
      <Container className="m-5" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Container>
          <Image src="/sign_up.png" alt="Sign_in" height={400} width={400}/>
        </Container>
        <Container>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicpassword">
              <Form.Label>password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" name="password"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicpasswordRepeat">
              <Form.Label>passwordRepeat</Form.Label>
              <Form.Control type="password" placeholder="Enter password confirm" name="passwordRepeat"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicrole">
              <Form.Label>role</Form.Label>
              <Form.Select name="role">
                <option role="user">user</option>
                <option role="admin">admin</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicprofilePictureUrl">
              <Form.Label>profilePictureUrl</Form.Label>
              <Form.Control type="url" placeholder="Enter profilePictureUrl" name="profilePictureUrl"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicphoneNumber">
              <Form.Label>phoneNumber</Form.Label>
              <Form.Control type="number" placeholder="Enter phoneNumber" name="phoneNumber"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Container>
      </Container>
    </LayOut>
  )
}