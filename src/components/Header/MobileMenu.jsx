import { RxCross2 } from "react-icons/rx";
import logo from "../../assets/images/logo.png";
import { navLinks } from "../../utils/utils";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";

const MobileMenu = ({ close }) => {
    return (
        <nav className="h-full flex flex-col justify-between">
            <div className="space-y-3">
                <div className="flex justify-between">
                    <Link to="/">
                        <img className="w-24" src={logo} alt="Alpaago Logo" />
                    </Link>
                    <RxCross2 onClick={close} size={32} />
                </div>
                <ul className="flex flex-col gap-3">
                    {navLinks.map((item) => (
                        <NavLink className="font-bold" key={item.link} to={item.link}>
                            {item.label}
                        </NavLink>
                    ))}
                </ul>
            </div>

            <Button>Sign In</Button>
        </nav>
    );
};

export default MobileMenu;
