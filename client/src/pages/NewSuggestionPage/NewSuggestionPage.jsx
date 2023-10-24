import * as React from "react"
import { Stack, Container, Box } from "@mui/material"
import Form from "../../components/Form/Form"
import { formFields, validationSchema } from "./form-fields"
import suggestionService from "../../services/suggestion-service"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { ButtonBack } from "../../components/CustomButtons/ButtonsMui"
import { IconNewFeedback } from "../../components/Icons/IconsSVG"

function NewSuggestionPage() {
  const [value] = useAuth()
  const navigate = useNavigate()
  const onSubmit = (data) => {
    const dataNew = { ...data, status: "Planned" }
    suggestionService
      .create(dataNew)
      .then((data) => navigate(-1, { replace: true }))
      .catch((err) => console.log(err))
  }

  return (
    <Container sx={{ height: "100vh" }} id="principal-container">
      <Stack
        component="main"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Stack gap="64px">
          <Box id="button-back">
            <ButtonBack />
          </Box>
          <Form
            heading="Create New Feedback"
            buttonLabel="Add Feedback"
            formFields={formFields}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            IconForm={IconNewFeedback}
          />
        </Stack>
      </Stack>
    </Container>
  )
}
export default NewSuggestionPage
