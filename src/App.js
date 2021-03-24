import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Details, Home } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
};

export { App };
