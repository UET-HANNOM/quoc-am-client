import MyAnimation from "container/helpers/AnimationRevealPage";
import DictionaryScreen from "container/screens/Dictionary";
import LibraryScreen from "container/screens/Library";
// import MyAnimation from "container/helpers/AnimationRevealPage";
import AuthScreen from "container/screens/Auth";
import QuickLookupScreen from "container/screens/QuickLookup";
import WelcomeScreen from "container/screens/Welcome";
import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FooterLayout from "../layout/footer";
import HeaderLayout from "../layout/header";
import Intro from "../layout/Intro";
import EachBookScreen from "container/screens/Library/EachBook";
export const PRIVATE_ROUTER = [];
export const PUBLIC_ROUTER = [
  { exact: true, path: "/welcome", component: WelcomeScreen },
  { exact: true, path: "/library", component: LibraryScreen },
  { exact: true, path: "/dictionary", component: DictionaryScreen },
  { exact: true, path: "/quickscan", component: QuickLookupScreen },
  { exact: true, path: "/auth", component: AuthScreen },
  { exact: true, path: "/library/:idbook", component: EachBookScreen },
];
function FadingRoute({ component: Component, myprops = null, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routeProps) => <Component {...routeProps} myprops={myprops} />}
    />
  );
}
const publicRouter = PUBLIC_ROUTER.map(({ exact, path, component }, key) => (
  <FadingRoute
    exact={exact}
    path={path}
    component={component}
    key={key}
  ></FadingRoute>
));

const RouterCenter = () => {
  const [state, setState] = useState({
    openMenu: false,
  });
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({
      ...state,
      openMenu: open,
    });
  };
  const path = window.location.pathname;
  const inAuthScreen = path.includes("/auth");
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Intro />
      {!inAuthScreen && <HeaderLayout toggleDrawer={toggleDrawer} />}
      <div className="cs-main-body">
        <Switch>
          <Redirect exact from="/" to="/welcome" />
          {publicRouter}
        </Switch>
      </div>
      {!inAuthScreen && <FooterLayout />}
    </BrowserRouter>
  );
};

export default RouterCenter;
