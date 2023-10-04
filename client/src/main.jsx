import React from "react"
import ReactDOM from "react-dom/client"
import "@fontsource/jost"
import "@fontsource/jost/400.css"
import "@fontsource/jost/600.css"
import "@fontsource/jost/800.css"
import { GlobalStyles } from "@mui/material"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import { AuthProvider } from "./hooks/auth"

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <GlobalStyles
            styles={{
                ":root": {
                    "--main-bg-color": "#F7F8FD",
                    "--white": "#FFFFFF",
                    "--purple": "#AD1FEA",
                    "--blue": "#4661E6",
                    "--light-blue": "#62BCFA",
                    "--dark-blue-bg": "#373F68",
                    "--dark-blue-text": "#3A4374",
                    "--semi-light-gray": "#F2F4FF",
                    "--light-gray": "#F7F8FD",
                    "--gray": "#647196",
                    "--orange": "#F49F85",
                    "--purple-hover": "#C75AF6",
                    "--blue-hover": "#7C91F9",
                    "--dark-blue-hover": "#656EA3",
                    "--red": "#D73737",
                    "--red-hover": "#E98888"
                },
                "*": {
                    margin: "0",
                    padding: "0",
                    boxSizing: "border-box",
                },
                body: {
                    fontFamily: "Jost",
                },
            }}
        />
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </>
)
