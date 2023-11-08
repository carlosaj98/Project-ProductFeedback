import { useState } from "react"
import { Stack, Avatar, Button, Typography, Box, Divider } from "@mui/material"
import ReplyCard from "./ReplyCard"
import FormReply from "../FormReply/FormReply"

import { CommentContainer } from "./Style"

function Comments({ content, user, replies, id, avatar, isDivider }) {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(true)
  }
  return (
    <CommentContainer>
      <Stack flexDirection={"row"} gap={"24px"}>
        <Avatar src={avatar} />
        <Stack width="100%" gap="20px">
          <Stack flexDirection="row" justifyContent="space-between">
            <Box>
              <Typography className="user-fullname">{`${user.firstname} ${user.lastname}`}</Typography>
              <Typography className="user-username">
                @{user.username}
              </Typography>
            </Box>
            <Button
              className="button-reply"
              onClick={handleClick}
              variant="text"
            >
              Reply
            </Button>
          </Stack>
          <Typography className="user-comment">{content}</Typography>
          {isActive && <FormReply replyingTo={user.username} commentID={id} />}
        </Stack>
      </Stack>
      {replies.length > 0 && (
        <Stack
          className="reply-flex-container"
          gap={"24px"}
          marginLeft={{ sm: "20px", xs: "0px" }}
        >
          {replies.map((reply) => (
            <ReplyCard
              key={reply._id}
              id={reply._id}
              content={reply.content}
              replyTo={reply.replyingTo}
              user={reply.user}
              commentID={id}
            />
          ))}
        </Stack>
      )}
      {isDivider && (
        <Divider sx={{ backgroundColor: "var(--gray)", opacity: "0.1" }} />
      )}
    </CommentContainer>
  )
}
export default Comments
