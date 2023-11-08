import { Stack, Container, Box, CircularProgress } from "@mui/material"
import Form from "../../components/Form/Form"
import { formFields, validationSchema } from "./form-fields"
import suggestionService from "../../services/suggestion-service"
import { useNavigate, useParams } from "react-router-dom"
import { useSuggestion } from "../../hooks"
import { useAuth } from "../../hooks/auth"
import _ from "lodash"
import { ButtonBack } from "../../common/CustomButtons/ButtonsMui"
import { IconEditFeedback } from "../../common/Icons/IconsSVG"
import PrincipalContainer from "./Style"

function EditSuggestionPage() {
  const [value] = useAuth()
  const navigate = useNavigate()
  const { suggestionID } = useParams()
  const { suggestion, setSuggestion, loading } = useSuggestion(suggestionID)
  const deleteSuggestion = () => {
    suggestionService.delete(suggestionID)
      .then(()=>navigate("/", { replace: true }))
  }

  const onSubmit = (data) => {
    suggestionService
      .update(data, suggestionID)
      .then((data) => navigate(-1, { replace: true }))
      .catch((err) => console.log(err))
  }

  if (loading) return <CircularProgress />

  return (
    <PrincipalContainer component="main">
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
          IconForm={IconEditFeedback}
          onDelete={deleteSuggestion}
        />
      </Stack>
    </PrincipalContainer>
  )
}
export default EditSuggestionPage
