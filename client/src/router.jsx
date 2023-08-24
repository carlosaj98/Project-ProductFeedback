import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage"
import MainLayout from "./MainLayout"
import ErrorPage from "./pages/ErrorPage"
import DetailPage from "./pages/DetailPage";
import RoadmapPage from "./pages/RoadmapPage";
import CreateSuggestionPage from "./pages/CreateSuggestionPage";
import EditSuggestionPage from "./pages/EditSuggestionPage";
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/suggestion/:suggestionID",
        element: <DetailPage />
      },
    ]
  },
  {
    path: "/suggestion/createsuggestion",
    element: <CreateSuggestionPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/suggestion/editsuggestion/:suggestionID",
    element: <EditSuggestionPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/roadmap",
    element: <RoadmapPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/signin",
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  
])

export default router