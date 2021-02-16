import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeScreen from './components/HomeScreen'
import Login from './components/Login'

function App() {
  const user = null;
  return (
    <div className="app">

      <Router>
        {!user ? (
          <Login />
        ) : (
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>
          )}

      </Router>

    </div>
  );
}

export default App;
