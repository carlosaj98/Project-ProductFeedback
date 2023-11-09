import { useNavigate } from "react-router-dom"
import { Stack, Box } from "@mui/material"

import { ButtonBack } from "../../common/CustomButtons/ButtonsMui"
import Form from "../../components/Form/Form"
import { formFields, validationSchema } from "./form-fields"

import { useAuth } from "../../hooks/auth"
import authService from "../../services/auth-service"

import PrincipalContainer from "./Style"

function SignInPage() {
  const navigate = useNavigate()

  const [, dispatch] = useAuth()
  const onSubmit = (data) => {
    authService
      .login(data)
      .then((user) => {
        let action = user.isAdmin ? { type: "admin" } : { type: "login" }

        action.payload = {
          username: user.username,
        }
        dispatch(action)

        navigate(-1)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <PrincipalContainer component="main">
      <Stack gap="64px">
        <Box id="button-back">
          <ButtonBack />
        </Box>
        <Form
          heading="Sign In"
          buttonLabel="Sign In"
          formFields={formFields}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </Stack>
    </PrincipalContainer>
  )
}
export default SignInPage
