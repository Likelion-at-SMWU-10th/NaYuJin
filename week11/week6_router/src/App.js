import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menubar from "./pages/Menubar";
import WhoAmI from "./pages/Whoami";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/whoami" element={<WhoAmI />}></Route>
    </Routes>
  );
}

export default App;
