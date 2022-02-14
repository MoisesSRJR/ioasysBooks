import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { GuestRoute } from "./GuestRoute";
import { PrivateRoute } from "./PrivateRoute";
import Providers from "./providers";

export default function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route element={<GuestRoute />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Providers>
    </BrowserRouter>
  );
}
