import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./components/Navbar";
import Home from "./Home";
import Navbar from "./components/Navbar";
import wip from "./wip"
import market from "./market"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wip" component={wip} />
        <Route exact path="/market" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
