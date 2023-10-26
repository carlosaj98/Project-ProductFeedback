import { Link } from "react-router-dom"
import { Box, Typography, Stack } from "@mui/material"
import { IllustrationEmpty } from "../Icons/IconsSVG"
import { ButtonPurple } from "../CustomButtons/ButtonsMui"
import CustomContainer from "./Style"

function EmptySuggestion() {
  return (
    <CustomContainer gap="50px">
      <Box id="illustration-container" width="130px">
        <IllustrationEmpty />
      </Box>
      <Stack id="illustration-text-container" alignItems="center" gap={"16px"}>
        <Typography variant="h3" fontSize="24px">
          There is no feedback yet
        </Typography>
        <Typography textAlign="center">
          Got a suggestion? Found a bug that needs to be squashed?
          <br />
          We love hearing about new ideas to improve our app.
        </Typography>
      </Stack>
      <Link to="/createsuggestion">
        <ButtonPurple text="+ Add Feedback">+ Add Feedback</ButtonPurple>
      </Link>
    </CustomContainer>
  )
}
export default EmptySuggestion
