import { Stack, Avatar, Button, Typography, Box } from "@mui/material"
import { NewReply } from "../../pages/DetailPage"
function Comments({ content, user, replies, id, avatar }) {
  return (
    <Stack flexDirection="row" gap={"24px"}>
      <Avatar src={avatar} />
      <Stack  width="100%">
        <Stack flexDirection="row" justifyContent="space-between">
          <Box>
            <p>{`${user.firstname} ${user.lastname}`}</p>
            <p>@{user.username}</p>
          </Box>
          <Button>Reply</Button>
        </Stack>
        <Typography>{content}</Typography>
      </Stack>
    </Stack>
  )
}
export default Comments
