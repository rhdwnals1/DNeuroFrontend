import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Result from "./pages/Result/Result";
import Survey from "./pages/Survey/Survey";
import MyPage from "./pages/MyPage/MyPage";
import Certification from "./pages/SignUp/Certification";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/Certification" component={Certification} />
          <Route exact path="/Result" component={Result} />
          <Route exact path="/Survey" component={Survey} />
          <Route exact path="/MyPage" component={MyPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
