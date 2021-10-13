import React from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
          </li>
          <li>
            <a href="/SEPractice">Select the Practice</a>
          </li>
          <li>
            <a href="/SubmitArticle">Submit an Article</a>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </Router>
  );
};

export default App;
