import { useState } from "react"
import { AppBar, Stack, Typography, Box, Drawer, Toolbar } from "@mui/material"
import {
  ButtonHamburger,
  ButtonCategory,
} from "../../common/CustomButtons/ButtonsMui"
import { NavbarContainer } from "./Style"
import DrawerSections from "./DrawerSections"

function NavbarMobile({ status, handleCategory, currentCategory }) {
  function statusValue(value) {
    return status.reduce((counter, element) => {
      if (element === value) {
        return counter + 1
      }
      return counter
    }, 0)
  }

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => setIsActive(!isActive)

  return (
    <NavbarContainer component="nav">
      <AppBar id="appbar-container" component="div" position="static">
        <Toolbar disableGutters>
          <Stack id="feedback-board">
            <Typography variant="h2">Frontend Mentor</Typography>
            <Typography>Feedback board</Typography>
          </Stack>
          <Box>
            <ButtonHamburger
              action={() => handleClick}
              actionStatus={isActive}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={isActive}
        onClose={handleClick}
        anchor="right"
        PaperProps={{ sx: { backgroundColor: "#F7F8FD" } }}
      >
        <DrawerSections
          statusValue={statusValue}
          handleCategory={(category) => {
            handleCategory(category), handleClick()
          }}
          currentCategory={currentCategory}
        />
      </Drawer>
    </NavbarContainer>
  )
}
export default NavbarMobile
