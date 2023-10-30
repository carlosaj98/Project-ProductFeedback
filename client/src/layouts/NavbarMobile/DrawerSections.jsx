import { Stack, Box } from "@mui/material"
import { ButtonCategory } from "../../common/CustomButtons/ButtonsMui"
import { DrawerSectionsContainer } from "./Style"

function DrawerSections({ statusValue }) {
  return (
    <DrawerSectionsContainer padding="24px" width={"300px"} gap={"24px"}>
      <Stack
        id="suggestionCategories"
      >
        <ButtonCategory text="All" />
        <ButtonCategory text="UI" />
        <ButtonCategory text="UX" />
        <ButtonCategory text="Enhancement" />
        <ButtonCategory text="Bug" />
        <ButtonCategory text="Feature" />
      </Stack>
      <Stack
        id="roadmap-preview"
        backgroundColor="white"
        padding="20px"
        borderRadius="10px"
        gap="8px"
      >
        <Stack id="rm-header" flexDirection="row" justifyContent="space-between">
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
    </DrawerSectionsContainer>
  )
}
export default DrawerSections
