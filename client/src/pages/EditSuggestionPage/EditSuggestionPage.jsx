import { Stack, Container, Box, CircularProgress } from "@mui/material"
import Form from "../../components/Form/Form"
import { formFields, validationSchema } from "./form-fields"
import suggestionService from "../../services/suggestion-service"
import { useNavigate, useParams } from "react-router-dom"
import { useSuggestion } from "../../hooks"
import { useAuth } from "../../hooks/auth"
import _ from "lodash"
import { ButtonBack } from "../../components/CustomButtons/ButtonsMui"

function EditSuggestionPage() {
  const [value] = useAuth()
  const navigate = useNavigate()
  const { suggestionID } = useParams()
  const { suggestion, setSuggestion, loading } = useSuggestion(suggestionID)

  const onSubmit = (data) => {
    suggestionService
      .update(data, suggestionID)
      .then((data) => navigate(-1, { replace: true }))
      .catch((err) => console.log(err))
  }

  if (loading) return <CircularProgress />

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
            defaultValues={_.pick(suggestion, [
              "title",
              "category",
              "status",
              "description",
            ])}
            validationSchema={validationSchema}
            adminExclusive={!!value.isAdmin}
          />
        </Stack>
      </Stack>
    </Container>
  )
}
export default EditSuggestionPage
