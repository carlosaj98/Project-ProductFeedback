import * as React from 'react'
import { Link } from "react-router-dom"
import { Stack, Typography, Button } from "@mui/material"
import Form from "../../components/Form"
import { formFields, validationSchema } from "./form-fields"
import suggestionService from '../../services/suggestion-service'

function NewSuggestionPage() {
    const onSubmit = (data) => {
        suggestionService.create(data)
        .then(console.log(data))
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
