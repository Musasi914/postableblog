import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../components/page/Home";
import CreatePost from "../components/page/CreatePost";
import Login from "../components/page/Login";
import Logout from "../components/page/Logout";
import Root from "../components/Templates/Root";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} element={<Home />} />
      <Route path="/createpost" element={<CreatePost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Route>
  )
);
