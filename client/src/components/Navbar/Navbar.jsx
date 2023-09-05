import Styled from "./Style"
import { Link } from "react-router-dom"
import { Button, Stack } from "@mui/material"
import authService from "../../services/auth-service"
import { useAuth } from "../../hooks/auth"
import { Navigate } from "react-router-dom"

function Navbar() {
    const [value, dispatch] = useAuth()
    const handleLogout = () => {
        authService.logout()

	    dispatch({ type: 'logout' })
    }
    console.log(value)
    return (
        <Styled.Navbar sx={{ width: { md: "256px" } }}>
            <div id="feedbackBoard">
                <h2>Frontend Mentor</h2>
                <p>Feedback Board</p>
            </div>
            <div id="suggestionCategories">
                <Styled.CategoryButton>All</Styled.CategoryButton>
                <Styled.CategoryButton>UI</Styled.CategoryButton>
                <Styled.CategoryButton>UX</Styled.CategoryButton>
                <Styled.CategoryButton>Enhancement</Styled.CategoryButton>
                <Styled.CategoryButton>Bug</Styled.CategoryButton>
                <Styled.CategoryButton>Feature</Styled.CategoryButton>
            </div>
            <div id="roadmap-preview">
                <div id="rm-header">
                    <p>Roadmap</p>
                    <a href="">View</a>
                </div>
                <ul id="rm-list">
                    <li className="rm-list-item">
                        <div id="dot-planned"></div>
                        <p className="rm-item-text">Planned</p>
                        <p className="rm-item-number">0</p>
                    </li>
                    <li className="rm-list-item">
                        <div id="dot-inprogress"></div>
                        <p className="rm-item-text">In-Progress</p>
                        <p className="rm-item-number">0</p>
                    </li>
                    <li className="rm-list-item">
                        <div id="dot-live"></div>
                        <p className="rm-item-text">Live</p>
                        <p className="rm-item-number">0</p>
                    </li>
                </ul>
            </div>
            <Stack
                id="user-btn"
                direction="row"
                sx={{
                    justifyContent: "space-evenly",
                }}
            >
                <>
                    {value.isAuth ? (
                            <Button
                                variant="contained"
                                component={Link}
                                color="error"
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                    ) : (
                        <>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/signin"
                            >
                                Sign In
                            </Button>
                            <Button
                                variant="contained"
                                component={Link}
                                to="/signup"
                            >
                                Sign Up
                            </Button>
                        </>
                    )}
                </>
            </Stack>
        </Styled.Navbar>
    )
}
export default Navbar
