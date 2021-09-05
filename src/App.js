
import './App.css';
import selectBox from './components/SelectBox'
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

const routes = [
    {
        path: "/",
        component: selectBox,
        exact: true

    },
];

function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper-content">
              <Switch>
                  {routes.map(route => (
                      <Route
                          path={route.path}
                          component={route.component}
                          key={route.path.toString()}
                          exact={route.exact}
                      />
                  ))}
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
