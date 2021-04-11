import React, { useState } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import FooterLayout from "../layout/footer";
import HeaderLayout from "../layout/header";
import Intro from "../layout/Intro";
import SidebarLayout from "../layout/Sidebar";

export const PRIVATE_ROUTER = [];
export const PUBLIC_ROUTER = [
  // { exact: true, path: "/dashboard", component: DashboardPage },
  // { exact: true, path: "/document/:id", component: DocumentPage },
];
function FadingRoute({ component: Component, myprops=null, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => (
          <Component {...routeProps} myprops={myprops}/>
      )}
    />
  );
}
const publicRouter = PUBLIC_ROUTER.map(({ path, component }, key) => (
  <FadingRoute path={path} component={component} key={key}></FadingRoute>
));

const RouterCenter = () => {
  const [state, setState] = useState({
    openMenu: false
  })
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({
      ...state,
      openMenu: open
    });
  };
  return (
    <BrowserRouter>
      <Intro />
      <HeaderLayout toggleDrawer={toggleDrawer}/>
      <SidebarLayout open={state.openMenu} toggleDrawer={toggleDrawer}/>
      <Switch>
        <Redirect exact from="/" to="/" />
        {publicRouter}
      </Switch>
      <FooterLayout />
    </BrowserRouter>
  );
};

export default RouterCenter;
