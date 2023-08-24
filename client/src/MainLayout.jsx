import { Outlet } from "react-router-dom"
import Navbar from "./components/mainComponents/Navbar"

function Layout() {
  return (
    <div id="layoutContainer">
      <Navbar />
      <Outlet />
    </div>
    
  )
}
export default Layout