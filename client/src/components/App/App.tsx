import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CustomMessage } from "../Reusable/Helpers";
import { Layout } from "./Layout";
import { Home } from "../Home/Home";

export function App() {
  return (
    <BrowserRouter basename="/agile-talent-solutions/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<></>} />
          <Route path="profile/:id" element={<></>} />
          <Route path="*" element={<CustomMessage message="404 page not found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}