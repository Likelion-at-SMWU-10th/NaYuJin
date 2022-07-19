import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menubar from "./pages/Menubar";
import Plan from "./pages/Plan";
import WhoAmI from "./pages/Whoami";
import ShowPostList from './pages/ShowPostList';
import ShowPost from "./pages/ShowPost";

const API_URL='https://reactapitest.pythonanywhere.com/api/';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Menubar apiUrl={API_URL} />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/whoami" element={<WhoAmI />}></Route>
        <Route path="/plan" element={<Plan />}></Route>
        <Route path="/posts" element={<ShowPostList apiUrl={API_URL} />}></Route>
        <Route path="/post/:postID" element={<ShowPost apiUrl={API_URL} />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
