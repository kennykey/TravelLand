"use client"
import LayOut from "@/component/LayOut";
import CategoryPage from "@/component/Fragment/CategoryPage";
import PromoPageTwo from "@/component/Fragment/PromoPageTwo";


export default function promo(){
    return( 
        <LayOut>
            <CategoryPage/>
            <PromoPageTwo/>
        <hr/>
        </LayOut>
    )
}