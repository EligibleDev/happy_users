import { FaArrowUp } from "react-icons/fa6";
import { useState, useEffect } from "react";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a
            id="scrollButton"
            href="#top"
            style={{
                display: showButton ? "block" : "none",
            }}
            className="fixed z-50 bottom-6 right-6 shadow-md shadow-primary-purple/20 hover:shadow-lg hover:shadow-secondary-purple/40 active:shadow-none rounded bg-secondary-purple px-7 py-5 text-xs font-extrabold uppercase tracking-[2px] transition-all duration-300  hover:scale-[1.015]"
        >
            <FaArrowUp className="text-white" />
        </a>
    );
};

export default BackToTop;
