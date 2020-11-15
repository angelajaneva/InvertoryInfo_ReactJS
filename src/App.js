import React from 'react'
import './App.css';
import Main from "./components/layout/Main";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Redirect} from "react-router"
import Navigation from "./components/common/Navigation/Navigation";
import MainView from "./components/layout/Views/MainView";
import MinorView from "./components/layout/Views/MinorView";

function App() {
  return (
    <Router>
      <Route path={"/"} component={Main}>
        {/*<Redirect to="/main" />*/}
        {/*<Route path="main" component={MainView}> </Route>*/}
        {/*<Route path="minor" component={MinorView}> </Route>*/}
      </Route>
    </Router>
  );
}

export default App;
