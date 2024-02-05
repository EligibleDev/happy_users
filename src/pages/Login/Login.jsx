import { Checkbox, Input, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        const toastId = toast.loading("Logging in...");

        try {
            const user = await login(email, password);
            toast.success("Login Successful", { id: toastId });
            navigate("/manage_users");
            console.log(user);
        } catch (error) {
            console.error(error);
            toast.error(error.message, { id: toastId });
        }
    };

    return (
        <section className="w-full h-screen flex justify-center items-center ">
            <div className="w-full max-w-sm p-4 border-2 border-secondary-purple rounded-lg sm:p-6 md:p-8 text-primary-dark-purple">
                <form onSubmit={handleLogin} className="space-y-6">
                    <h5 className="font-title text-4xl">Login</h5>
                    <Input
                        type="email"
                        required
                        color="black"
                        variant="standard"
                        label="Your Email"
                        name="email"
                    />

                    <Input
                        type="password"
                        required
                        color="black"
                        variant="standard"
                        label="Your Password"
                        name="password"
                    />
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="black"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-yellow"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                        required
                    />

                    <Button type="submit">Submit</Button>
                    <div className="text-sm font-medium ">
                        Not registered?{" "}
                        <Link to="/register" className="text-yellow">
                            <b>Create account</b>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
