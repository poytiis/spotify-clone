import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandinPage";
import LogIn from "./components/pages/LogIn/logIn";
import SignUp from "./components/pages/SignUp/SignUp";
import HomePage from "./components/pages/HomePage/HomePage";
import ProtectedRoute from "./authentication/ProtectedRoute";
import RedirectLoggedInRoute from "./authentication/RedirectLoggedInRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      }
    ]
  },
  {
    path: '/login',
    element: <RedirectLoggedInRoute/>,
    children: [
      {
        index: true,
        element: <LogIn/>
      }
    ]
  },
  {
    path: '/signup',
    element: <RedirectLoggedInRoute/>,
    children: [
      {
        index: true,
        element: <SignUp/>
      }
    ]
  },
  {
    path: '/landing',
    element: <RedirectLoggedInRoute/>,
    children: [
      {
        index: true,
        element: <LandingPage/>
      }
    ]
  },

]);

export { router };
