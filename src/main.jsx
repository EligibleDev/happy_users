import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routers/MainRouter/MainRouter";
import { ThemeProvider } from "@material-tailwind/react";

const alpaagoTheme = {
    button: {
        defaultProps: {
            variant: "filled",
            size: "md",
            color: "secondary-purple",
            fullWidth: false,
            ripple: true,
            className: "",
        },
    },
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <ThemeProvider value={alpaagoTheme}> */}
            <RouterProvider router={MainRouter} />
        {/* </ThemeProvider> */}
    </React.StrictMode>
);
