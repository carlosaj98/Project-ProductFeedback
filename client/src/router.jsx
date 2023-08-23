import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage"
import Layout from "./pages/Layout"
import ErrorPage from "./pages/ErrorPage"
import DetailPage from "./pages/DetailPage";
import UpdateSuggestionPage from "./pages/UpdateSuggestionPage";
import DeleteSuggestionPage from "./pages/DeleteSuggestionPage";
import NewSuggestionPage from "./pages/NewSuggestionPage";
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage";
import LogoutPage from "./pages/LogoutPage";
import RoadmapPage from "./pages/RoadmapPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/signin",
        element: <LoginPage />
      },
      {
        path: "/signin",
        element: <RegisterPage />
      },
      {
        path: "/signin",
        element: <LogoutPage />
      },
      {
        path: "/suggestion/:suggestionID",
        element: <DetailPage />
      },
      {
        path: "/suggestion/new",
        element: <NewSuggestionPage />
      },
      {
        path: "/suggestion/update/:suggestionID",
        element: <UpdateSuggestionPage />
      },
      {
        path: "/suggestion/delete/:suggestionID",
        element: <DeleteSuggestionPage />
      },
    ]
  },
  {
    path: "/roadmap",
    element: <RoadmapPage />,
    errorElement: <ErrorPage />
  }
  
])

export default router