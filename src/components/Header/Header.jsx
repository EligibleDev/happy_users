import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { navLinks } from "../../utils/utils";
import Button from "../Button/Button";

const Header = () => {
    return (
        <header className="container bg-transparent mx-auto">
            <nav className="flex justify-between items-center">
                <img className="w-20" src={logo} alt="Alpaago logo" />
                <ul className="flex gap-4 font-semibold ">
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
                <Button>sign in</Button>
            </nav>
        </header>
    );
};

export default Header;
