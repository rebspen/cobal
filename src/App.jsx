import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Team from "./views/Team";
import AddTeam from "./views/AddTeam";
import Nav from "./components/Nav/index";
import Footer from "./components/Footer/index";
import team from "./team.json";

function App() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    setTeam(team);
    return () => {
      console.log("unmounted")
    }
  }, [team]);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" render={(props)=> <Team team={team} />}/>
          <Route path="/new-employee" render={(props)=> <AddTeam setTeam={setTeam} />}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
