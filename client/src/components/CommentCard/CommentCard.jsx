import { Stack, Avatar, Button, Typography, Box, Divider } from "@mui/material"
import ReplyCard from "./ReplyCard"
import { NewReply } from "../../pages/DetailPage"

import {CommentContainer} from "./Style"
function Comments({ content, user, replies, id, avatar, isDivider }) {
  return (
    <CommentContainer>
      <Avatar src={avatar} />
      <Stack width="100%" gap="20px">
        <Stack flexDirection="row" justifyContent="space-between">
          <Box>
            <Typography className="user-fullname">{`${user.firstname} ${user.lastname}`}</Typography>
            <Typography className="user-username">@{user.username}</Typography>
          </Box>
          <Button>Reply</Button>
        </Stack>
        <Typography className="user-comment">{content}</Typography>
        {replies.length > 0 && (
          <Stack>
            {replies.map((reply) => (
              <ReplyCard
                key={reply._id}
                id={reply._id}
                content={reply.content}
                replyTo={reply.replyingTo}
                user={reply.user}
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
