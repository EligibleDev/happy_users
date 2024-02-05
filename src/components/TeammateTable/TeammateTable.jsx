import { Spinner, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth/useAuth";
import { deleteTheTeammate, getTeammates, makeInactive } from "../../api/users";
import toast from "react-hot-toast";
import Button from "../Button/Button";
import AddTeammateForm from "../AddTeammateForm/AddTeammateForm";
import { useState } from "react";

const TeammateTable = () => {
    const [sort, setSort] = useState(false);
    const { user } = useAuth();

    const TABLE_HEAD = ["Name", "Status", "Added Date", "Actions"];

    const {
        data: teammates,
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["teammate", sort],
        queryFn: () => getTeammates(user?.email, sort),
    });

    const makeUserInactive = async (_id, name) => {
        const toastId = toast.loading(`Making ${name} inactive`);

        try {
            const res = await makeInactive(_id);
            console.log(res);
            toast.success(`${name} is now marked as inactive`, { id: toastId });
            refetch();
        } catch (error) {
            console.error(error);
            toast.error(error.message, { id: toastId });
        }
    };

    const deleteTeammate = async (_id, name) => {
        const toastId = toast.loading(`Deleting ${name}...`);

        try {
            const res = await deleteTheTeammate(_id);
            console.log(res);
            toast.success(`${name} is no longer in our database`, { id: toastId });
            refetch();
        } catch (error) {
            console.log(error);
            toast.error(error.message, { id: toastId });
        }
    };

    return (
        <section className="max-w-screen-xl mx-auto text-center mt-44 px-4 xl:px-0">
            {isLoading ? (
                <Spinner color="purple" className="h-16 w-16" />
            ) : isError ? (
                <p>{error.message}</p>
            ) : (
                <div>
                    <div className="mb-6 text-right" onClick={() => setSort(!sort)}>
                        <Button>{sort ? "Newest first" : "Oldest first"}</Button>
                    </div>
                    <div className="h-full w-full overflow-scroll">
                        <table className="w-full table-auto text-center">
                            <thead>
                                <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th
                                            key={head}
                                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                        >
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal leading-none opacity-70"
                                            >
                                                {head}
                                            </Typography>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {teammates?.map(
                                    ({ _id, name, active, addedTime }, index) => {
                                        const isLast = index === teammates?.length - 1;
                                        const classes = isLast
                                            ? "p-4"
                                            : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={_id}>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
                                                    </Typography>
                                                </td>
                                                <td
                                                    className={`${classes} bg-blue-gray-50/50`}
                                                >
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {active ? "Active" : "Inactive"}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {(() => {
                                                            const date = new Date(
                                                                addedTime
                                                            );
                                                            const formattedDate =
                                                                date.toLocaleString(
                                                                    "en-US",
                                                                    {
                                                                        year: "numeric",
                                                                        month: "numeric",
                                                                        day: "numeric",
                                                                        hour: "numeric",
                                                                        minute: "numeric",
                                                                        hour12: true,
                                                                    }
                                                                );
                                                            return formattedDate;
                                                        })()}
                                                    </Typography>
                                                </td>
                                                <td
                                                    className={`${classes} bg-blue-gray-50/50 space-x-3`}
                                                >
                                                    <span
                                                        onClick={() =>
                                                            makeUserInactive(_id, name)
                                                        }
                                                    >
                                                        <Button>Make Inactive</Button>
                                                    </span>
                                                    <span
                                                        onClick={() =>
                                                            deleteTeammate(_id, name)
                                                        }
                                                    >
                                                        <Button>Delete</Button>
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            <AddTeammateForm refetch={refetch} />
        </section>
    );
};

export default TeammateTable;
