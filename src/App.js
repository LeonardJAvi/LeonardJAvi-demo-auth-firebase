import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Recovery from "./ResetPassword";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import SimpleLineIcon from "react-simple-line-icons";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="wrapper">
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login/signin" component={Login} />
          <Route exact path="/login/signup" component={SignUp} />
          <Route exact path="/login/recovery" component={Recovery} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
