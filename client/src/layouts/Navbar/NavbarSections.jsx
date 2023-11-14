import { Stack, Box } from "@mui/material"
import { Link } from "react-router-dom"
import { ButtonCategory } from "../../common/CustomButtons/ButtonsMui"

function NavbarSections({ statusValue, handleCategory, currentCategory }) {
  return (
    <Stack flexDirection={{ md: "column", sm: "row" }} gap="24px">
      <Box
        id="feedbackBoard"
        flexGrow="1"
        maxWidth={{ md: "100%", sm: "calc(100%/3)" }}
      >
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </Box>
      <Stack
        id="suggestionCategories"
        flexGrow="1"
        maxWidth={{ md: "100%", sm: "calc(100%/3)" }}
      >
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
        flexGrow="1"
        maxWidth={{ md: "100%", sm: "calc(100%/3)" }}
      >
        <Stack id="rm-header">
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
    </Stack>
  )
}
export default NavbarSections
