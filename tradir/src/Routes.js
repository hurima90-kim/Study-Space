import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import BeerList from "./Pages/BeerList/BeerList";
import Home from "./Pages/Home/Home";
import GlobalStyle from "./Styles/GlobalStyle";
import Modal from "./Components/Modal/Modal";
import CartList from "./Pages/CartList/CartList";
// import ReactGA from "react-ga";

const Routes = () => {
  const detail = useSelector((state) => state.columnsReducer.detail);
  const props = useSelector((state) => state.columnsReducer.props);

  return (
    <Router>
      <GlobalStyle />
      {detail && <Modal data={props} />}
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/beerlist" component={BeerList} />
        <Route path="/cartlist" component={CartList} />
      </Switch>
    </Router>
  );
};

export default Routes;
