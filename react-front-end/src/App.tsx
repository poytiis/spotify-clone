import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandinPage";
import LogIn from "./components/pages/LogIn/logIn";
import SignUp from "./components/pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/login',
    element: <LogIn/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },

]);


export { router };
