import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import "./components/Navbar";
import Home from "./Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
