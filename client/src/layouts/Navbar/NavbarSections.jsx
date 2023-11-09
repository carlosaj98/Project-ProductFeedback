import { Stack, Box } from "@mui/material"
import { ButtonCategory } from "../../common/CustomButtons/ButtonsMui"

function NavbarSections({statusValue, handleCategory}) {
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
          <ButtonCategory text="All" action={handleCategory}/>
          <ButtonCategory text="UI" action={handleCategory}/>
          <ButtonCategory text="UX" action={handleCategory}/>
          <ButtonCategory text="Enhancement" action={handleCategory}/>
          <ButtonCategory text="Bug" action={handleCategory}/>
          <ButtonCategory text="Feature" action={handleCategory}/>
        </Stack>
        <Stack
          id="roadmap-preview"
          flexGrow="1"
          maxWidth={{ md: "100%", sm: "calc(100%/3)" }}
        >
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
      </Stack>
  )
}
export default NavbarSections