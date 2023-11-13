import { createBrowserRouter } from "react-router-dom"

import HomePage from "./pages/HomePage/HomePage"
import ErrorPage from "./pages/ErrorPage"
import DetailPage from "./pages/DetailPage/DetailPage"
import RoadmapPage from "./pages/RoadmapPage/RoadmapPage"
import NewSuggestionPage from "./pages/NewSuggestionPage/NewSuggestionPage"
import EditSuggestionPage from "./pages/EditSuggestionPage/EditSuggestionPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import SignInPage from "./pages/SignInPage/SignInPage"
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
    element: <ProtectedRoute page={SignUpPage} role="anonymous"/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <ProtectedRoute page={SignInPage} role="anonymous"/>,
    errorElement: <ErrorPage />,
  },
])

export default router
