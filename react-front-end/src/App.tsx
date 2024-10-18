import {
  createBrowserRouter,
} from "react-router-dom";
import LandingPage from "./components/pages/LandingPage/LandinPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  }
]);


export { router };
