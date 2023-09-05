import * as React from "react"
import { Link } from "react-router-dom"

import { Stack, Typography, Button } from "@mui/material"
import Form from "../../components/Form"
import { formFields, validationSchema } from "./form-fields"

function SignInPage() {
    const onSubmit = (data) => {
        console.log(data)
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
