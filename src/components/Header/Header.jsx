import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { navLinks } from "../../utils/utils";
import Button from "../Button/Button";
import { useState } from "react";
import { Drawer } from "@material-tailwind/react";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";

const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const closeMobileMenu = () => setOpenMobileMenu(false)

    return (
        <>
            <header className="container bg-transparent mx-auto">
                <nav className="flex justify-between items-center py-4 px-4 xl:px-0">
                    <img className="w-20" src={logo} alt="Alpaago logo" />
                    <ul className="hidden lg:flex gap-8 font-semibold ">
                        {navLinks.map((item) => (
                            <NavLink
                                className="hover:text-secondary-purple transition"
                                key={item.label}
                                to={item.link}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </ul>
                    <Button className="hidden lg:block">sign in</Button>
                    <FaBarsStaggered
                        size={26}
                        className="block lg:hidden"
                        onClick={() => setOpenMobileMenu(true)}
                    />
                </nav>
            </header>

            <Drawer
                placement="right"
                open={openMobileMenu}
                onClose={() => setOpenMobileMenu(false)}
                className="p-4"
            >
                <MobileMenu close={closeMobileMenu} />
            </Drawer>
        </>
    );
};

export default Header;
