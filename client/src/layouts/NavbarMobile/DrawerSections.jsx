import { Stack, Box } from "@mui/material"
import {
  ButtonCategory,
  ButtonRed,
  ButtonBlue,
} from "../../common/CustomButtons/ButtonsMui"
import { DrawerSectionsContainer } from "./Style"
import { useAuth } from "../../hooks/auth"
import authService from "../../services/auth-service"
import { Link } from "react-router-dom"

function DrawerSections({ statusValue, handleCategory, currentCategory }) {
  const [value, dispatch] = useAuth()
  const handleLogout = () => {
    authService.logout()

    dispatch({ type: "logout" })
  }

  return (
    <DrawerSectionsContainer padding="24px" width={"300px"} gap={"24px"}>
      <Stack id="suggestionCategories">
        <ButtonCategory
          text="All"
          value=""
          action={handleCategory}
          isActive={currentCategory === ""}
        />
        <ButtonCategory
          text="UI"
          value="UI"
          action={handleCategory}
          isActive={currentCategory === "UI"}
        />
        <ButtonCategory
          text="UX"
          value="UX"
          action={handleCategory}
          isActive={currentCategory === "UX"}
        />
        <ButtonCategory
          text="Enhancement"
          value="Enhancement"
          action={handleCategory}
          isActive={currentCategory === "Enhancement"}
        />
        <ButtonCategory
          text="Bug"
          value="Bug"
          action={handleCategory}
          isActive={currentCategory === "Bug"}
        />
        <ButtonCategory
          text="Feature"
          value="Feature"
          action={handleCategory}
          isActive={currentCategory === "Feature"}
        />
      </Stack>
      <Stack
        id="roadmap-preview"
        backgroundColor="white"
        padding="20px"
        borderRadius="10px"
        gap="8px"
      >
        <Stack
          id="rm-header"
          flexDirection="row"
          justifyContent="space-between"
        >
          <p>Roadmap</p>
          <Link to="/roadmap">View</Link>
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
      <Stack flexDirection="row" justifyContent="center" gap="24px">
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
    </DrawerSectionsContainer>
  )
}
export default DrawerSections
