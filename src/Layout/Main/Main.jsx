import 'bootstrap/dist/css/bootstrap.min.css';

import { Outlet } from "react-router-dom";
import Footer from "../../page/Shared/Footer/Footer";
import Navbars from "../../page/Shared/Navbars/Navbars";



const Main = () => {
    
    return (
        <div>
    <div >
   
        <Navbars></Navbars>
        <Outlet></Outlet> 
        {/* <Footer></Footer> */}
        </div>

        </div>
    );
};

export default Main;