import { createBrowserRouter } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage"
import ErrorPage from "./pages/ErrorPage"
import DetailPage from "./pages/DetailPage2/DetailPage"
import RoadmapPage from "./pages/RoadmapPage"
import NewSuggestionPage from "./pages/NewSuggestionPage/NewSuggestionPage"
import EditSuggestionPage from "./pages/EditSuggestionPage/EditSuggestionPage"
import RegisterPage from "./pages/SignUpPage/RegisterPage"
import LoginPage from "./pages/SignInPage/LoginPage"
import ProtectedRoute from "./utils/ProtectedRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/suggestion/:suggestionID",
    element: <DetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/createsuggestion",
    element: <ProtectedRoute page={NewSuggestionPage} role="isAuth"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/suggestion/editsuggestion/:suggestionID",
    element: <ProtectedRoute page={EditSuggestionPage} role="isAuth"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/roadmap",
    element: <RoadmapPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <ProtectedRoute page={RegisterPage} role="anonymous"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <ProtectedRoute page={LoginPage} role="anonymous"/>,
    errorElement: <ErrorPage />,
  },
])

export default router
