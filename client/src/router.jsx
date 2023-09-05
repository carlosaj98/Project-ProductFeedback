import { createBrowserRouter } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"
import DetailPage from "./pages/DetailPage"
import RoadmapPage from "./pages/RoadmapPage"
import CreateSuggestionPage from "./pages/CreateSuggestionPage"
import EditSuggestionPage from "./pages/EditSuggestionPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
// import ProtectedRoute from "./utils/ProtectedRoute"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/suggestion",
    element: <DetailPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/suggestion/createsuggestion",
    element: <CreateSuggestionPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/suggestion/editsuggestion/:suggestionID",
    element: <EditSuggestionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/roadmap",
    element: <RoadmapPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
])

export default router
