import { Stack, Box } from "@mui/material"
import { ButtonBlue, ButtonRed } from "../../common/CustomButtons/ButtonsMui"
import { useAuth } from "../../hooks/auth"
import authService from "../../services/auth-service"
import {Link} from "react-router-dom"

function NavbarUserBtn() {
  const [value, dispatch] = useAuth()
  const handleLogout = () => {
    authService.logout()

    dispatch({ type: "logout" })
  }
  return (
    <Stack
    id="user-btn"
    direction="row"
    justifyContent="center"
    gap="24px"
    flexGrow="1"
  >
    <>
      {value.isAuth ? (
        <ButtonRed
          variant="contained"
          color="error"
          action={handleLogout}
          text={"LOGOUT"}
        ></ButtonRed>
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
  )
}
export default NavbarUserBtn