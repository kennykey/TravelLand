import Navbars from "./Navbars";
 
export default function LayOut ({children}){
    return (
        <div>
            <Navbars/>
            {children}
        </div>
    );
}
