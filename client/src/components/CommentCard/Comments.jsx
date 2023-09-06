import { Card } from "@mui/material"
import NewComment from "../../pages/DetailPage"
function Comments({ content, user, replies }) {
    return (
        <>
            <Card
                sx={{
                    padding: "24px",
                    backgroundColor: "var(--light-gray)",
                    color: "var(--dark-blue-text)",
                    border: "2px solid var(--dark-blue-bg)",
                }}
            >
                <h3 style={{ color: "var(--purple)", marginBottom: "8px" }}>
                    @{user}
                </h3>
                <p>{content}</p>
                {replies.map((reply) => (
                    <Card
                    key={reply._id}
                        sx={{
                            marginTop: "16px",
                            padding: "24px",
                            backgroundColor: "var(--semi-light-gray)",
                            color: "var(--dark-blue-text)",
                            border: "2px solid var(--dark-blue-bg)",
                        }}
                    >
                        <h3 style={{ color: "var(--orange)", marginBottom: "8px" }}>@{reply.replyingTo}</h3>
                        <p>{reply.content}</p>
                    </Card>
                ))}
            </Card>
        </>
    )
}
export default Comments
