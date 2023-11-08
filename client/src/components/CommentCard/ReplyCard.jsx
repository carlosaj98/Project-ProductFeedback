import { useState } from "react"
import { Stack, Avatar, Button, Typography, Box } from "@mui/material"
import FormReply from "../FormReply/FormReply"
import { ReplyContainer } from "./Style"

function ReplyCard({ id, content, replyTo, user, commentID }) {
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(true)
  }
  return (
    <ReplyContainer>
      <Stack flexDirection={"row"} gap={"24px"}>
        <Avatar src={user.avatar} />
        <Stack width="100%" gap="20px">
          <Stack flexDirection="row" justifyContent="space-between">
            <Box>
              <Typography className="user-fullname">{`${user.firstname} ${user.lastname}`}</Typography>
              <Typography className="user-username">
                @{user.username}
              </Typography>
            </Box>
            <Button onClick={handleClick}>Reply</Button>
          </Stack>
          <Typography className="user-comment">
            <span className="username-reply">@{replyTo} </span>
            {content}
          </Typography>
          {isActive && (
            <FormReply replyingTo={user.username} commentID={commentID} />
          )}
        </Stack>
      </Stack>
    </ReplyContainer>
  )
}
export default ReplyCard
