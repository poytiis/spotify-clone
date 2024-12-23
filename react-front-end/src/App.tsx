import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandinPage";
import LogIn from "./components/pages/LogIn/logIn";
import SignUp from "./components/pages/SignUp/SignUp";
import HomePage from "./components/pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/login',
    element: <LogIn/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/landing',
    element: <LandingPage/>
  },

]);


export { router };
