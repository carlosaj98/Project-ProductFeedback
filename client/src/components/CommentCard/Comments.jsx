import { Card } from "@mui/material"
import { NewReply } from "../../pages/DetailPage"
function Comments({ content, user, replies, id }) {
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
                        <h3 style={{ color: "var(--orange)", marginBottom: "8px" }}>@{reply.user.username}</h3>
                        <p><span style={{color:"var(--blue)"}}>@{reply.replyingTo}</span> {reply.content}</p>
                    </Card>
                ))}
                <NewReply commentID={id} replyingTo={user}/>
            </Card>
        </>
    )
}
export default Comments
