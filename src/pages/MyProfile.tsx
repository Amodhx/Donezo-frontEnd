import HeaderComponent from "../components/HeaderComponent.tsx";
import {Outlet} from "react-router-dom";

function MyProfile(){
    return(
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    )
}
export default MyProfile