import Styled from "./Style"
import { Link } from "react-router-dom"
import { Button, Stack } from "@mui/material"
import authService from "../../services/auth-service"
import { useAuth } from "../../hooks/auth"
import { Navigate } from "react-router-dom"
import { ButtonBlue, ButtonCategory } from "../CustomButtons/ButtonsMui"

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
    <Styled.Navbar sx={{ width: { md: "256px" } }}>
      <div id="feedbackBoard">
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </div>
      <div id="suggestionCategories">
        <ButtonCategory text="All" />
        <ButtonCategory text="UI"/>
        <ButtonCategory text="UX" />
        <ButtonCategory text="Enhancement" />
        <ButtonCategory text="Bug" />
        <ButtonCategory text="Feature" />
      </div>
      <div id="roadmap-preview">
        <div id="rm-header">
          <p>Roadmap</p>
          <a href="">View</a>
        </div>
        <ul id="rm-list">
          <li className="rm-list-item">
            <div id="dot-planned"></div>
            <p className="rm-item-text">Planned</p>
            <p className="rm-item-number">{statusValue("Planned")}</p>
          </li>
          <li className="rm-list-item">
            <div id="dot-inprogress"></div>
            <p className="rm-item-text">In-Progress</p>
            <p className="rm-item-number">{statusValue("In-Progress")}</p>
          </li>
          <li className="rm-list-item">
            <div id="dot-live"></div>
            <p className="rm-item-text">Live</p>
            <p className="rm-item-number">{statusValue("Live")}</p>
          </li>
        </ul>
      </div>
      <Stack
        id="user-btn"
        direction="row"
        sx={{
          justifyContent: "space-evenly",
        }}
      >
        <>
          {value.isAuth ? (
            <Button
              variant="contained"

              color="error"
              onClick={handleLogout}
            >
              Logout
            </Button>
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
    </Styled.Navbar>
  )
}
export default Navbar
