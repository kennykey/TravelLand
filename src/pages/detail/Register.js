"use client"
import { Container,Form } from "react-bootstrap"
import React ,{ useState } from "react"
import LayOut from "@/component/LayOut";
import useAuth from "@/useApi/useAuth";
import { useDispatch } from "react-redux";
import useCreate from "@/useApi/useCreate";
import Image from "next/image";
import Button from "@/component/ui/Button";
import Input from "@/component/ui/Input";

export default function Register() {
  const [image, setImage] = useState([]);
  const {postCreate} = useCreate()
  const {Auth,loading} = useAuth();
  const dispatch = useDispatch();
  const [prompt, setPromp] = useState([]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (!file?.type?.startsWith('image/')) {
        setPromp('File should be .jpeg, .jpg or .png format');
        return;
    }
    const formData = new FormData();
    formData.append('image', file);
    try {
        const res = await postCreate('upload-image', formData);
        setImage(res.data.url);
    } catch (err) {
        setPromp(err);
        }
};

  const handleRegister = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;
    const passwordRepeat = e.target.passwordRepeat.value;
    const role = e.target.role.value;  
    const profilePictureUrl = image;
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
            <p>{prompt}</p>
            <Input label='email' id='email' name='email' type='email'/>
            <Input label='name' id='name' name='name' type='text'/>
            <Input label='pasword' id='password' name='password' type='password'/>
            <Input label='password confirm' id='password' name='passwordRepeat' type='password'/>
            <Form.Group className="mb-3" controlId="formBasicrole">
              <Form.Label>role</Form.Label>
              <Form.Select name="role">
                <option role="user">user</option>
                <option role="admin">admin</option>
              </Form.Select>
            </Form.Group>
            <Input label='image' id='image' name='image' type='file' onChange={handleChange}/>
            <Input label='phone' id='phone' name='phoneNumber' type='number'/>
            <Button type='submit' className='btn btn-primary w-100'>
                Submit
            </Button>
          </Form>
        </Container>
      </Container>
    </LayOut>
  )
}