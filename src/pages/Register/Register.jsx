import toast from "react-hot-toast";
import { Checkbox, Input, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import useAuth from "../../hooks/useAuth/useAuth";
import { postUser } from "../../api/users";

const Register = () => {
    const { createUser, updateUser } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        const toastId = toast.loading("Signing Up...");

        const name = event.target.name.value;
        const email = event.target.email.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;

        if (password.length < 6) {
            return toast.error("Password has to be at least 6 characters", {
                id: toastId,
            });
        } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?])/.test(password)) {
            return toast.error(
                "Password has to include at least 1 capital letter and 1 special character",
                { id: toastId }
            );
        }

        try {
            const userCredential = await createUser(email, password);
            await updateUser(name, photo);

            const res = await postUser(userCredential.user);
            console.log("api response=> ", res);
            console.log(userCredential.user);
            toast.success("registration completed", { id: toastId });
            navigate('/manage_users')
        } catch (error) {
            console.error(error);
            toast.error(error.message, { id: toastId });
        }
    };

    return (
        <section className="w-full h-screen flex justify-center items-center ">
            <div className="w-full max-w-sm p-4 border-2 border-secondary-purple rounded-lg sm:p-6 md:p-8 text-primary-dark-purple">
                <form onSubmit={handleRegister} className="space-y-6">
                    <h5 className="font-title text-4xl">Register</h5>
                    <Input
                        type="text"
                        required
                        color="black"
                        variant="standard"
                        label="Your Name"
                        name="name"
                    />
                    <Input
                        type="email"
                        required
                        color="black"
                        variant="standard"
                        label="Your Email"
                        name="email"
                    />
                    <Input
                        type="text"
                        required
                        color="black"
                        variant="standard"
                        label="Your Photo URL"
                        name="photo"
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

                    <Button type="submit`">Register</Button>
                    <div className="text-sm font-medium ">
                        Already have an account?{" "}
                        <Link to="/login" className="text-yellow">
                            <b>Login</b>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;
