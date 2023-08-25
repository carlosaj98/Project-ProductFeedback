import React from "react"
import ReactDOM from "react-dom/client"
import "@fontsource/jost"
import "@fontsource/jost/400.css"
import "@fontsource/jost/600.css"
import "@fontsource/jost/800.css"

import { RouterProvider } from "react-router-dom"
import router from "./router"

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />)
