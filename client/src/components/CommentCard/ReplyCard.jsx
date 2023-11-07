import { Stack, Avatar, Button, Typography, Box, Divider } from "@mui/material"
import { ReplyContainer } from "./Style"

function ReplyCard({ id, content, replyTo, user }) {
  return (
    <ReplyContainer>
      <Avatar src={user.avatar} />
      <Stack width="100%" gap="20px">
        <Stack flexDirection="row" justifyContent="space-between">
          <Box>
            <Typography className="user-fullname">{`${user.firstname} ${user.lastname}`}</Typography>
            <Typography className="user-username">@{user.username}</Typography>
          </Box>
          <Button>Reply</Button>
        </Stack>
        <Typography className="user-comment">
          <span className="username-reply">@{replyTo} </span>
          {content}
        </Typography>
      </Stack>
    </ReplyContainer>
  )
}
export default ReplyCard
