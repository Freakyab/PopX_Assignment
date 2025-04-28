import { BrowserRouter as Router, Route,Routes } from "react-router";
import Home from "./home";
import Signup from "./signup";
import Login from "./login";
import AccountSettings from "./accountSettings";

export default function Paths() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<AccountSettings />}></Route>
      </Routes>
    </Router>
  );
}
