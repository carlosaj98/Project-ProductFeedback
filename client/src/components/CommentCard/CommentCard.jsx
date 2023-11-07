import { useState } from "react"
import { Stack, Avatar, Button, Typography, Box, Divider } from "@mui/material"
import ReplyCard from "./ReplyCard"
import FormReply from "../FormReply/FormReply"

import {CommentContainer} from "./Style"

function Comments({ content, user, replies, id, avatar, isDivider }) {
  const [isActive, setIsActive] = useState(false)
  const handleClick = ()=> {setIsActive(true)}
  return (
    <CommentContainer>
      <Avatar src={avatar} />
      <Stack width="100%" gap="20px">
        <Stack flexDirection="row" justifyContent="space-between">
          <Box>
            <Typography className="user-fullname">{`${user.firstname} ${user.lastname}`}</Typography>
            <Typography className="user-username">@{user.username}</Typography>
          </Box>
          <Button onClick={handleClick}>Reply</Button>
        </Stack>
        <Typography className="user-comment">{content}</Typography>
        {isActive && <FormReply replyingTo={user.username} commentID={id}/>}
        {replies.length > 0 && (
          <Stack gap={"24px"}>
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
        {isDivider && <Divider />}
      </Stack>
    </CommentContainer>
  )
}
export default Comments
