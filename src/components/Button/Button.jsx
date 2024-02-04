const Button = ({ children }) => {
    return (
        <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-primary-dark-purple text-white shadow-md shadow-primary-dark-purple/10 hover:bg-secondary-purple hover:shadow-lg hover:shadow-secondary-purple/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
        >
            {children}
        </button>
    );
};

export default Button;
