import Login from "../components/login";
import Home from "../components/home";
import Registration from "../components/registration";
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
  <Routes>
    <Route path="/" element={<Login />}></Route>;
    <Route path="/home" element={<Home />}></Route>;
    <Route path="/registration" element={<Registration/>}></Route>;
    <Route path="/login" element={<Login/>}></Route>;
  </Routes>
  );
}export default App;

