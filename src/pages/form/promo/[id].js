import NavDash from "@/component/NavDash";
import useCreate from "@/useApi/useCreate";
import useGetData from "@/useApi/useGetData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Container,Form,Button } from "react-bootstrap";


export default function updatePromo(){
    const {getData} = useGetData();
    const [update, setUpdate] = useState([]);
    const [promoImage,setpromoImage] = useState(null);
    const [promp, setPromp] = useState('');
    const {postCreate} = useCreate();
    const route = useRouter()

    useEffect(()=>{
        getData(`promo/${route.query.id}`).then((resp)=>setUpdate(resp?.data?.data));
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
            const res = await postCreate(`update-promo/${route.query.id}`, promoData);
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
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Control type="text" placeholder="Enter title promo " name="title"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Control type="text" as="textarea" rows={3} placeholder="Enter description promo " name="description"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formImage">
                        <Form.Control type="file" placeholder="Enter image file" name="image" onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTerm">
                        <Form.Control type="text" placeholder="Enter term promo " name="term"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formCode">
                        <Form.Control type="text" placeholder="Enter code promo " name="code"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formDiscount">
                        <Form.Control type="number" placeholder="Enter discount promo " name="discount"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formClaim">
                        <Form.Control type="number" placeholder="Enter claim promo " name="claim"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Submit
                    </Button>
                </Form>
            </Container>
        </NavDash>
    )
}