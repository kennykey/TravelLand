import Footer from "./Footer";
import Navbars from "./Navbars";
 
export default function LayOut ({children}){
    return (
        <div>
            <Navbars/>
            {children}
            <Footer/>
        </div>
    );
}
