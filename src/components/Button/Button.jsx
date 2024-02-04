const Button = ({ children, className }) => {
    return (
        <button
            className={`capitalize py-2 px-7 font-semibold rounded-xl bg-primary-dark-purple text-white shadow-md shadow-primary-dark-purple/10 hover:bg-secondary-purple hover:shadow-lg hover:shadow-secondary-purple/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ${className}`}
            type="button"
        >
            {children}
        </button>
    );
};

export default Button;
