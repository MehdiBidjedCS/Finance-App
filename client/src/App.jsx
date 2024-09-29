import LandPage from "./pages/LandPage";
import Signup from "./pages/Signup";
import "./index.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/login" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
