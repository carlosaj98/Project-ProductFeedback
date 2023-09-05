import * as React from 'react'
import { Link } from "react-router-dom"
import { Stack, Typography, Button } from "@mui/material"
import Form from "../../components/Form"
import { formFields, validationSchema } from "./form-fields"
import suggestionService from '../../services/suggestion-service'
import { useNavigate } from 'react-router-dom'

function NewSuggestionPage() {
    const navigate = useNavigate()
    const onSubmit = (data) => {
        suggestionService.create(data)
        .then((data) => navigate(-1, {replace: true}))
        .catch((err) => console.log(err))
	}

    return (
        <Stack spacing={3} alignItems="flex-start">
            <Button variant="outlined" component={Link} to="/">Back</Button>
            <Stack direction="row" justifyContent="space-between">
                <Form
                    heading="New Feedback"
                    buttonLabel="Add New Feedback"
                    formFields={formFields}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                />
            </Stack>
        </Stack>
    )
}
export default NewSuggestionPage
