import * as React from "react"
import { Link } from "react-router-dom"

import { Stack, Typography, Button } from "@mui/material"
import Form from "../../components/Form/Form"
import { formFields, validationSchema } from "./form-fields"
import { useAuth } from '../../hooks/auth'

import authService from '../../services/auth-service'

import { useNavigate } from 'react-router-dom'

function SignInPage() {
    const navigate = useNavigate()

	const [, dispatch] = useAuth()
    const onSubmit = (data) => {
        authService
            .login(data)
            .then((user) => {
                let action = user.isAdmin ? { type: 'admin' } : { type: 'login' }

				action.payload = {
					username: user.username,
				}
				dispatch(action)

				navigate(-1,)
			})
			.catch((err) => {
				console.log(err)
			})
    }
    return (
        <Stack spacing={3} alignItems="flex-start">
            <Button variant="outlined" component={Link} to="/">Back</Button>
            <Stack direction="row" justifyContent="space-between">
                <Form
                    heading="Login"
                    buttonLabel="Sign In"
                    formFields={formFields}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                />
            </Stack>
        </Stack>
    )
}
export default SignInPage
