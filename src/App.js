import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/homePage";

import "./App.css";

const About = () => <h2>About page</h2>;
const Contact = () => <h2> Contact Page</h2>;

const Topic = ({ match }) => <h3>Request Param: {match.params.id}</h3>;

const Topics = ({ match }) => {
  return (
    <div>
      <h2>Topics</h2>
      <nav>
        <ul>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Prompts V. State</Link>
          </li>
        </ul>
      </nav>
      <Route path={`${match.path}/:id`} component={Topics} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic</h3>}
      />
    </div>
  );
};
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Page</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>
        <Route
          path="/"
          exact
          render={routeProps => <HomePage name="Austin" {...routeProps} />}
        />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}
export default App;
