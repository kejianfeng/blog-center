import React from "react";
import "./App.css";
import HeadBar from './components/HeadBar/index.js'
import router from './router/index.js'
import { Route,BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <div>
      <HeadBar></HeadBar>
        {
          // router.map((item, key) => (
          //   <Route component={item.component} exact={item.exact} key={key} path={item.path}>
          //   </Route>
          // ))
          renderRoutes(router)
        }
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
