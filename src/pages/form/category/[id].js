import NavDash from "@/component/NavDash";
import useCreate from "@/useApi/useCreate";
import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container,Form } from "react-bootstrap";
import Input from "@/component/ui/Input";
import Button from "@/component/ui/Button";

export default function updateCategory(){
    const {getData} = useGetData();
    const [update, setUpdate] = useState([]);
    const [categoryImage,setcategoryImage] = useState(null);
    const [promp, setPromp] = useState('');
    const {postCreate} = useCreate();
    const route = useRouter()

    useEffect(()=>{
        getData(`category/${route.query.id}`).then((resp)=>setUpdate(resp?.data?.data));
    })

    const handleChange = async (e) => {
        const file = e.target.files[0];
        if (!file?.type?.startsWith('image/')) {
            setPromp('File should be .jpeg, .jpg or .png format');
            return;
        }
        const formData = new FormData();
        formData.append('image', file);
        try {
            const res = await postCreate(`upload-image`, formData);
            setcategoryImage(res.data.url);
        } catch (err) {
            setPromp(err);
        }
    console.log(setcategoryImage);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const categoryData ={
            name:e.target.name.value,   
            imageUrl:categoryImage,
        }
        console.log(categoryData);
        try {
            const res = await postCreate(`update-category/${route.query.id}`, categoryData);
            if (res?.status === 200) {
                setPromp(res?.data?.message);
            }
        } catch (err) {
            setPromp(err?.response?.data?.message);
        }
    };

    return(
        <NavDash>
            <Container className="d-flex m-5 tengah">
                <Form  onSubmit={handleUpload} style={{width:"400px"}}>
                    <p>{promp}</p>
                    <img src={categoryImage} alt="image-upload" style={{width:"200px", height:"200px"}}/>
                    <Input type='text' id='name' name='name'/>
                    <Input type='file' name='image' id='image' onChange={handleChange}/>
                    <Button type="submit" className="btn btn-primary w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </NavDash>
    )
}