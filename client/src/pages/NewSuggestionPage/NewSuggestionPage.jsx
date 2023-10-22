import * as React from "react"
import { Stack, Container, Box } from "@mui/material"
import Form from "../../components/Form"
import { formFields, validationSchema } from "./form-fields"
import suggestionService from "../../services/suggestion-service"
import { useNavigate } from "react-router-dom"
import CustomContainer from "./Style"
import { ButtonBack } from "../../components/CustomButtons/ButtonsMui"

function NewSuggestionPage() {
  const navigate = useNavigate()
  const onSubmit = (data) => {
    const dataNew = { ...data, status: "Planned" }
    suggestionService
      .create(dataNew)
      .then((data) => navigate(-1, { replace: true }))
      .catch((err) => console.log(err))
  }

  return (
    <Container sx={{ height: "100vh" }} id="main-container">
      <CustomContainer component="main">
        <Stack gap="64px">
          <Box id="button-back">
            <ButtonBack />
          </Box>
          <Box id="form-container">
            <Form
              heading="Create New Feedback"
              buttonLabel="Add Feedback"
              formFields={formFields}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            />
          </Box>
        </Stack>
      </CustomContainer>
    </Container>
  )
}
export default NewSuggestionPage
