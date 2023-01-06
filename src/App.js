import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Router exact path="/">
        <Home/>
        </Router>
        <Router path="/login">
        <Login/>
        </Router>
        <Router path="/register">
        <Register/>
        </Router>
        <Router path="/profile/:username">
        <Profile/>
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
