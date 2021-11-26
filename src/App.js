import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./components/Navbar";
import Home from "./Home";
import Navbar from "./components/Navbar";
import wip from "./wip";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wip" component={wip} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
