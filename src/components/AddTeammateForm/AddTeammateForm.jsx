import { Input } from "@material-tailwind/react";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth/useAuth";
import { postTeammate } from "../../api/users";
import toast from "react-hot-toast";

const AddTeammateForm = () => {
    const { user } = useAuth();

    const handleAddTeammate = async (e) => {
        e.preventDefault();
        const currentTime = new Date();
        const name = e.target.name.value;
        const toastId = toast.loading("Adding User...");
        const teammate = { name, currentTime, active: true, leader: user?.email };

        try {
            const res = await postTeammate(teammate);
            console.log(res);
            toast.success("User added successfully", { id: toastId });
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <form
            className="w-96 flex items-center justify-center gap-2"
            onSubmit={handleAddTeammate}
        >
            <Input
                className=""
                type="text"
                required
                color="black"
                //     variant="standard"
                label="User's Name"
                name="name"
            />

            <Button className="w-full" type="submit">
                Add User
            </Button>
        </form>
    );
};

export default AddTeammateForm;
