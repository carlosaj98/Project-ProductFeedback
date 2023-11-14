import { useAuth } from "../../hooks/auth"
import { useSuggestions } from "../../hooks"

import Roadmap from "../../layouts/Roadmap/Roadmap"
import RoadmapMobile from "../../layouts/RoadmapMobile/RoadmapMobile"
import PrincipalContainer from "./Style"
import { Stack, Typography, Box, CircularProgress } from "@mui/material"
import { useMediaQuery } from "@mui/material"
import {
  ButtonBackWhite,
  ButtonPurple,
} from "../../common/CustomButtons/ButtonsMui"
import { Link } from "react-router-dom"



function RoadmapPage() {
  const [value] = useAuth()
  const { suggestions, loading } = useSuggestions({
    category: "",
    sortByUpvotes: "",
    sortByComments: "",
  })
  const isMobileScreen = useMediaQuery("(max-width: 600px)")

  if (loading)
    return (
      <Stack minHeight={"100vh"} alignItems="center" justifyContent="center">
        <CircularProgress sx={{ color: "var(--purple)" }} size={"32px"} />
      </Stack>
    )

  return (
    <PrincipalContainer id="principal-container" disableGutters>
      <Stack id="main-container">
        <Stack
          alignItems="center"
          gap={{ sm: "48px", xs: "20px" }}
          padding={{ md: "78px 24px", sm: "56px 40px" }}
        >
          <Stack
            component="header"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            borderRadius={{ sm: "10px", xs: "0px" }}
          >
            <Box>
              <ButtonBackWhite />
              <Typography id="roadmap-title">Roadmap</Typography>
            </Box>
            <Box>
              {value.isAuth ? (
                <Link to="/createsuggestion">
                  <ButtonPurple text="+ Add Feedback">
                    + Add Feedback
                  </ButtonPurple>
                </Link>
              ) : (
                <ButtonPurple text="+ Add Feedback" userExclusive={true}>
                  + Add Feedback
                </ButtonPurple>
              )}
            </Box>
          </Stack>
          {isMobileScreen ? (
            <RoadmapMobile suggestions={suggestions} />
          ) : (
            <Roadmap suggestions={suggestions} />
          )}
        </Stack>
      </Stack>
    </PrincipalContainer>
  )
}
export default RoadmapPage
