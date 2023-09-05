import * as React from "react"
import { Link } from "react-router-dom"
import { Stack, Typography, Button } from "@mui/material"
import Form from "../../components/Form"
import { formFields, validationSchema } from "./form-fields"
import { useAuth } from "../../hooks/auth"

import authService from "../../services/auth-service"

import { useNavigate } from "react-router-dom"

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
        <Stack spacing={3} alignItems="flex-start">
            <Button variant="outlined" component={Link} to="/">
                Back
            </Button>
            <Stack direction="row" justifyContent="space-between">
                <Form
                    heading="Register"
                    buttonLabel="Sign Up"
                    formFields={formFields}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                />
            </Stack>
        </Stack>
    )
}
export default SignUpPage
