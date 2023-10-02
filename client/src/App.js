import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HeroList from './components/HeroList';
import HeroDetail from './components/HeroDetail';
import PowerList from './components/PowerList';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/heroes">Heroes</Link>
            </li>
            <li>
              <Link to="/powers">Powers</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/heroes/:id">
            <HeroDetail />
          </Route>
          <Route path="/heroes">
            <HeroList />
          </Route>
          <Route path="/powers">
            <PowerList />
          </Route>
          <Route path="/">
            <HeroList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
