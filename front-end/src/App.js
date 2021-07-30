import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Login from "./components/SignIn";
import SignUp from "./components/SignUp";
import Gallery from "./components/Gallery";
import PrivateRoute from "./helper/PrivateRoute";
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
        <PrivateRoute exact path="/protected/gallery" component = {Gallery}>
          {/* <Gallery /> */}
        </PrivateRoute>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
