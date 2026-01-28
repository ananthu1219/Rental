import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Explore from "./pages/Explore";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
