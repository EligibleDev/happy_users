import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-466px)] -mt-[106px]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
