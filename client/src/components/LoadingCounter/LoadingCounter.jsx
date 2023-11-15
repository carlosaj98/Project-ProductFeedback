import {
  CircularProgress,
  Box,
  Typography,
  Container,
  Button,
} from "@mui/material"
import { useState, useEffect } from "react"
import CustomContainer from "./Style"
import { ButtonRed } from "../../common/CustomButtons/ButtonsMui"

function LoadingCounter({disableLoading}) {
  const [counter, setCounter] = useState(30)
  const [isload, setIsLoad] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0))
    }, 1000)

    setTimeout(() => setIsLoad(true), 35000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Container>
      <CustomContainer>
        <CircularProgress size={"64px"} sx={{ color: "var(--purple)" }} />
        <Box textAlign="center" id="counter-text">
          <Typography variant="h3">Server is loading ...</Typography>
          <Typography>{counter}s remaining</Typography>
        </Box>
        <Box id="info-text" textAlign="center" marginTop="24px">
          <Typography>
            Due to the limitations of the free subscription, the server takes a
            few seconds to activate.
          </Typography>
          <Typography>Sorry for the inconvenience</Typography>
        </Box>
        {isload && (
          <>
            <Typography id="text-time" textAlign="center">
              Server is not loading correctly, you can access without server if
              you want
            </Typography>
            <ButtonRed text={"START WITHOUT SERVER"} action={disableLoading}/>
          </>
        )}
      </CustomContainer>
    </Container>
  )
}
export default LoadingCounter
