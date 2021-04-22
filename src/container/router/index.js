import DictionaryScreen from "container/screens/Dictionary";
import LibraryScreen from "container/screens/Library";
import AuthScreen from "container/screens/Auth";
import QuickLookupScreen from "container/screens/QuickLookup";
import WelcomeScreen from "container/screens/Welcome";
import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FooterLayout from "../layout/footer";
import HeaderLayout from "../layout/header";
import Intro from "../layout/Intro";
import EachBookScreen from "container/screens/Library/EachBook";
import LoadingBar from "container/layout/loadingbar";
import { useSelector } from "react-redux";
import ForumScreen from "container/screens/Forum";
import ReadingInForumScreen from "container/screens/Forum/Reading";
import WritingScreen from "container/screens/Forum/Writing";

export const PRIVATE_ROUTER = [];
export const PUBLIC_ROUTER = [
  { exact: true, path: "/welcome", component: WelcomeScreen },
  { exact: true, path: "/library", component: LibraryScreen },
  { exact: true, path: "/dictionary", component: DictionaryScreen },
  { exact: true, path: "/quickscan", component: QuickLookupScreen },
  { exact: true, path: "/library/:idbook", component: EachBookScreen },
  { exact: true, path: "/forum", component: ForumScreen },
  { exact: true, path: "/forum/:id", component: ReadingInForumScreen },
  { exact: true, path: "/writing", component: WritingScreen },
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
  const loading = useSelector((state) => state.isLoading);
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <LoadingBar load={loading} />
      <Intro />
      {!inAuthScreen && <HeaderLayout toggleDrawer={toggleDrawer} />}
      <div className="cs-main-body">
        <Switch>
          <Redirect exact from="/" to="/welcome" />
          {publicRouter}
          {!isAuth && <Route exact path="/auth/:type/:from" component={AuthScreen} />}
        </Switch>
      </div>
      {!inAuthScreen && <FooterLayout />}
    </BrowserRouter>
  );
};

export default RouterCenter;
