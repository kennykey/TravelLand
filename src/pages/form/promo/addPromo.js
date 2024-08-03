import NavDash from "@/component/NavDash";
import useCreate from "@/useApi/useCreate";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container,Form } from "react-bootstrap";
import Input from "@/component/ui/Input";
import Button from "@/component/ui/Button";


export default function addPromo(){
    const [promoImage,setpromoImage] = useState(null);
    const [promp, setPromp] = useState('');
    const {postCreate} = useCreate();
    const route = useRouter()

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
            setpromoImage(res.data.url);
        } catch (err) {
            setPromp(err);
        }
    console.log(setpromoImage);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const promoData ={
            title:e.target.title.value,
            description:e.target.description.value,
            imageUrl:promoImage,
            terms_condition:e.target.term.value,
            promo_code:e.target.code.value,
            promo_discount_price: Number(e.target.discount.value),
            minimum_claim_price: Number(e.target.claim.value),
        }
        console.log(promoData);
        try {
            const res = await postCreate('create-promo', promoData);
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
                    <img src={promoImage} alt="image-upload" style={{width:"200px", height:"200px"}}/>
                    <Input type='text' id='title' name='title'/>
                    <Input type='textarea' rows='3' id='description' name='description'/>
                    <Input type='file' name='image' id='image' onChange={handleChange}/>
                    <Input type='text' id='term' name='term'/>
                    <Input type='text' id='code' name='code'/>
                    <Input type='number' id='discount' name='discount'/>
                    <Input type='number' id='claim' name='claim'/>
                    <Button type="submit" className="btn btn-primary w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </NavDash>
    )
}