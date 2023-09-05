import Styled from "./Style"
import DeleteIcon from "@mui/icons-material/Delete"
import { Button } from "@mui/material"
import { IconComments, ArrowUp } from "../Icons/IconsSVG"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

function SuggestionCard({ title, category, description, comments, upvotes, onSetID, onDelete, id }) {
    const [value] = useAuth()
    const categoryCapitalize =
        category.charAt(0).toUpperCase() + category.slice(1)

    let totalComments = comments.length
    let totalReplies = 0
    comments.forEach((comment) => {
        totalReplies += comment.replies.length
    })


    return (
        <Styled.SuggestionCard className="suggestion-card-container">
            <div className="upvote-container">
                <Styled.ButtonScore>
                    <ArrowUp />
                    <p>{upvotes}</p>
                </Styled.ButtonScore>
            </div>
            <div className="suggestion-card-text">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>
                    <strong>{categoryCapitalize}</strong>
                </p>
            </div>
            <div className="icon-comment">
                <IconComments />
                <p>{totalComments + totalReplies}</p>
                {value.isAdmin && (
                    <Button onClick={() => {
                      onSetID(id)
                      onDelete(id)
                      }}>
                        <DeleteIcon color="error" />
                    </Button>
                )}
            </div>
        </Styled.SuggestionCard>
    )
}
export default SuggestionCard
