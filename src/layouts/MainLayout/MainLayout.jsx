import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop/BackToTop";

const MainLayout = () => {
    return (
        <>
            <Header />
            <div className="min-h-[calc(100vh-360px)] -mt-[106px]">
                <Outlet />
            </div>
            <Footer />
            <BackToTop />
        </>
    );
};

export default MainLayout;
