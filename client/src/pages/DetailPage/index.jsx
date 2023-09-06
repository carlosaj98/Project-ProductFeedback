import { Link } from "react-router-dom"
import Form from "../../components/Form"
import { formFields, validationSchema } from "./form-fields"
import { Stack, Button } from "@mui/material"
import { useSuggestion } from "../../hooks"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import commentService from "../../services/comment-service"
import {useComment} from "../../hooks"

function NewComment() {
    const navigate = useNavigate()
    const { suggestionID } = useParams()
    const onSubmit = (data) => {
        commentService
            .create(data, suggestionID)
            .then((data) => navigate(0, { replace: false }))
            .catch((err) => console.log(err))
    }

    return (
        <Stack spacing={3} alignItems="flex-start">
            <Stack direction="row" justifyContent="space-between">
                <Form
                    heading=""
                    buttonLabel="Add Comment"
                    formFields={formFields}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                />
            </Stack>
        </Stack>
    )
}

function NewReply({commentID, replyingTo}) {
    const navigate = useNavigate()
    const onSubmit = (data) => {
        const dataNew = {...data, replyingTo}
        // console.log(dataNew, commentID)
        commentService
            .update(dataNew, commentID)
            .then((data) => navigate(0, { replace: false }))
            .catch((err) => console.log(err))
    }

    return (
        <Stack spacing={3} alignItems="flex-start">
            <Stack direction="row" justifyContent="space-between">
                <Form
                    heading=""
                    buttonLabel="Add Reply"
                    formFields={formFields}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                />
            </Stack>
        </Stack>
    )
}
export {NewComment, NewReply}
