import { createContext, useContext, useReducer } from "react"
import authService from "../services/auth-service"
const user = authService.getCurrentUser()

const initialValue = !user
    ? { isAuth: false }
    : user.isAdmin
    ? { isAuth: true, isAdmin: true, username: user.username }
    : { isAuth: true, username: user.username }

const AuthContext = createContext(initialValue)

function reducer(state, action) {
    switch (action.type) {
        case "login":
            return { isAuth: true, username: action.payload.username }

        case "admin":
            return {
                isAuth: true,
                isAdmin: true,
                username: action.payload.username,
            }

        case "logout":
            return { isAuth: false }

        default:
            throw new Error("")
    }
}

const AuthProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialValue)

    return (
        <AuthContext.Provider value={[value, dispatch]}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
