import CustomHeader from "./Style"
import { IconSuggestion, ArrowDown } from "../Icons/IconsSVG"
import { ButtonPurple } from "../CustomButtons/ButtonsMui"
import { Box, Typography, Button, Stack } from "@mui/material"
import { Link } from "react-router-dom"
function Headerbar({counter}) {
  return (
    <CustomHeader id="header-container" component="header">
      <Box id="svg-header-container">
        <IconSuggestion />
      </Box>
      <p id="counter-header">{counter} Suggestions</p>
      <Button id="sort-container" sx={{textTransform: "none"}}>
        <p>
          Sort by : <span>Most Upvotes</span>
        </p>
        <ArrowDown stroke={"white"} />
      </Button>
      <Stack id="add-suggestion">
        <Link to="/createsuggestion">
          <ButtonPurple text="+ Add Feedback">+ Add Feedback</ButtonPurple>
        </Link>
      </Stack>
    </CustomHeader>
  )
}
export default Headerbar
