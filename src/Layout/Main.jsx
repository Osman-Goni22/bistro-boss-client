import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Footer/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname==='/login' || location.pathname==='/signup';
    console.log(location, noHeaderFooter);
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
            
        </div>
    );
};

export default Main;