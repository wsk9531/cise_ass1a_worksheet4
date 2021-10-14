import React from "react";
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home";
import SubmitArticle from "./components/Submit-Article";

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
            <li>
              <li>
                <NavLink to="/SubmitArticle">Submit an Article</NavLink>
              </li>
            </li>
          </li>
          <li>
            <a href="/SubmitArticle">Submit an Article</a>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />

          <Route path="/SubmitArticle" component={SubmitArticle} />
        </div>
      </div>
    </Router>
  );
};

export default App;
