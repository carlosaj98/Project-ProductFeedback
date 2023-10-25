import CustomNavbar from "./Style"
import { Link } from "react-router-dom"
import { Button, Stack, Box } from "@mui/material"
import authService from "../../services/auth-service"
import { useAuth } from "../../hooks/auth"
import { Navigate } from "react-router-dom"
import { ButtonBlue, ButtonCategory, ButtonRed } from "../CustomButtons/ButtonsMui"

function Navbar({ status }) {
  const [value, dispatch] = useAuth()
  const handleLogout = () => {
    authService.logout()

    dispatch({ type: "logout" })
  }

  function statusValue(value) {
    return status.reduce((contador, elemento) => {
      if (elemento === value) {
        return contador + 1
      }
      return contador
    }, 0)
  }
  return (
    <CustomNavbar
      component="nav"
      minWidth={{md: "256px"}}
      width={{md: "256px", sm: "100%"}}
      height="100%"
      flexDirection={{md: "column", sm: "row"}}
      flexWrap={"wrap"}
    >
      <Box id="feedbackBoard" flexGrow="1" maxWidth={{ md:"100%" ,sm: "calc(100%/3)"}}>
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </Box>
      <Stack id="suggestionCategories" flexGrow="1" maxWidth={{ md:"100%" ,sm: "calc(100%/3)"}}>
        <ButtonCategory text="All" />
        <ButtonCategory text="UI" />
        <ButtonCategory text="UX" />
        <ButtonCategory text="Enhancement" />
        <ButtonCategory text="Bug" />
        <ButtonCategory text="Feature" />
      </Stack>
      <Stack id="roadmap-preview" flexGrow="1" maxWidth={{ md:"100%" ,sm: "calc(100%/3)"}}>
        <Stack id="rm-header">
          <p>Roadmap</p>
          <a href="">View</a>
        </Stack>
        <ul id="rm-list">
          <li className="rm-list-item">
            <Box id="dot-planned"></Box>
            <p className="rm-item-text">Planned</p>
            <p className="rm-item-number">{statusValue("Planned")}</p>
          </li>
          <li className="rm-list-item">
            <Box id="dot-inprogress"></Box>
            <p className="rm-item-text">In-Progress</p>
            <p className="rm-item-number">{statusValue("In-Progress")}</p>
          </li>
          <li className="rm-list-item">
            <Box id="dot-live"></Box>
            <p className="rm-item-text">Live</p>
            <p className="rm-item-number">{statusValue("Live")}</p>
          </li>
        </ul>
      </Stack>
      <Stack
        id="user-btn"
        direction="row"
        justifyContent="center"
        gap="24px"
        flexGrow="1"
      >
        <>
          {value.isAuth ? (
            <ButtonRed variant="contained" color="error" action={handleLogout} text={"LOGOUT"}>
            </ButtonRed>
          ) : (
            <>
              <Link to="/signin">
                <ButtonBlue text="SIGN IN" />
              </Link>

              <Link to="/signup">
                <ButtonBlue text="SIGN UP" />
              </Link>
            </>
          )}
        </>
      </Stack>
    </CustomNavbar>
  )
}
export default Navbar
