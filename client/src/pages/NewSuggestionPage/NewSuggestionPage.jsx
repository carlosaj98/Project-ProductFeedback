import * as React from "react"
import { Link } from "react-router-dom"
import { Stack, Typography, Button, Container, Box } from "@mui/material"
import Form from "../../components/Form"
import { formFields, validationSchema } from "./form-fields"
import suggestionService from "../../services/suggestion-service"
import { useNavigate } from "react-router-dom"
import CustomContainer from "./Style"

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
    <Container disableGutters sx={{ height: "100vh" }} id="main-container">
      <CustomContainer component="main">
        <Button variant="outlined" component={Link} to="/">
          Back
        </Button>
        <Box id="form-container">
          <Form
            heading="Create New Feedback"
            buttonLabel="Add New Feedback"
            formFields={formFields}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          />
        </Box>
      </CustomContainer>
    </Container>
  )
}
export default NewSuggestionPage
