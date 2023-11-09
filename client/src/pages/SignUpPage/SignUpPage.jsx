import { useNavigate } from "react-router-dom"
import { Stack, Box } from "@mui/material"

import { ButtonBack } from "../../common/CustomButtons/ButtonsMui"
import Form from "../../components/Form/Form"
import { formFields, validationSchema } from "./form-fields"

import { useAuth } from "../../hooks/auth"
import authService from "../../services/auth-service"

import PrincipalContainer from "./Style"

function SignUpPage() {
  const navigate = useNavigate()

  const [, dispatch] = useAuth()

  const onSubmit = async (data) => {
    const token = await authService.register(data)
    const user = await authService.loginWithToken(token)

    let action = user.isAdmin ? { type: "admin" } : { type: "login" }

    action.payload = {
      firstname: user.firstname,
      lastname: user.lastname,
      avatar: user.avatar,
      username: user.username,
    }
    dispatch(action)

    navigate(-1, { replace: true })
  }
  return (
    <PrincipalContainer component="main">
      <Stack gap="64px">
        <Box id="button-back">
          <ButtonBack />
        </Box>
        <Form
          heading="Sign Up"
          buttonLabel="Sign Up"
          formFields={formFields}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </Stack>
    </PrincipalContainer>
  )
}
export default SignUpPage
