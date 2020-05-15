import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./helpers/icons";
import { routes } from "./helpers/routes";

const renderPage = (Layout, Component, props) => {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              render={(props) =>
                renderPage(route.layout, route.component, props)
              }
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
