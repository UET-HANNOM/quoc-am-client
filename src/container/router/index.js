import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HeaderLayout from "../layout/header";
import DashboardPage from "../screens/Dashboard";
import DocumentPage from "../screens/Document";

export const PRIVATE_ROUTER = [];
export const PUBLIC_ROUTER = [
  { exact: true, path: "/dashboard", component: DashboardPage },
  { exact: true, path: "/document/:id", component: DocumentPage },
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
  return (
    <BrowserRouter>
      <HeaderLayout />
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        {publicRouter}
      </Switch>
    </BrowserRouter>
  );
};

export default RouterCenter;
