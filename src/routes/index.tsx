import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Providers from "./providers";

export default function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  );
}
