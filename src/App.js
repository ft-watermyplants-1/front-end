import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/SignIn";
import SignUp from "./components/SignUp";
import Gallery from "./components/Gallery";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/Gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
