import * as React from 'react'
import { Link } from "react-router-dom"
import { Stack, Typography, Button, CircularProgress } from "@mui/material"
import Form from "../../components/Form/Form"
import { formFields, validationSchema } from "./form-fields"
import suggestionService from '../../services/suggestion-service'
import { useNavigate } from 'react-router-dom'
import { useSuggestion } from '../../hooks'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import _ from 'lodash'

function UpdateSuggestion() {
    const [value] = useAuth()
    const navigate = useNavigate()
    const {suggestionID} = useParams()
    const {suggestion, setSuggestion, loading} = useSuggestion(suggestionID)

    const onSubmit = (data) => {
        suggestionService.update(data, suggestionID)
        .then((data) => navigate(-1, {replace: true}))
        .catch((err) => console.log(err))
	}

    if(loading) return <CircularProgress />

    return (
        <Stack spacing={3} alignItems="flex-start">
            <Button variant="outlined" component={Link} to="/">Back</Button>
            <Stack direction="row" justifyContent="space-between">
                <Form
                    heading="Update Feedback"
                    buttonLabel="Update Feedback"
                    formFields={formFields}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                    defaultValues={_.pick(suggestion, [
                        "title",
                        "category",
                        "status",
                    ])}
                    adminExclusive={value.isAdmin}
                />
            </Stack>
        </Stack>
    )
}
export default UpdateSuggestion
