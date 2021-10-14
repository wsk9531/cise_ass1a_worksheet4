import React from "react";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home";
import SubmitArticle from "./components/Submit-Article";
import SEPractice from "./components/SEPractice";
import NotFoundPage from "./components/404page";
const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/SubmitArticle">Submit an Article</NavLink>
          </li>
          <li>
            <NavLink to="/SEPractice">Select the Practice</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/SubmitArticle" component={SubmitArticle} />
          <Route path="/SEPractice" component={SEPractice} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="404" />
        </div>
      </div>
    </Router>
  );
};

export default App;
