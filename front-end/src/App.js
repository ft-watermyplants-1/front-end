import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path = '/login'>
          <Login />
        </Route>
        <Route path = '/signup'>
          <Signup />
        </Route>
        <Route path = '/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
