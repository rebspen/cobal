import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Team from "./views/Team";
import AddTeam from "./views/AddTeam";
import Footer from "./components/Footer/index";
import teams from "./team.json";
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    setTeam(teams);
  },[]);

  const addPerson = (person) => {
    setTeam(team => [...team, person]);
  };

  const updatePerson = (person) => {
   console.log("app person update", person)
   setTeam(team.map((teammember) => {
    return teammember.id === person.id ? person : teammember;
  }));
  };

  const deletePerson = (person) => {
    setTeam(team.filter((teammember) => teammember.id !== person.id));
   };

  console.log("team", team)
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" render={(props)=> <Team  {...props} team={team} updatePerson={updatePerson} deletePerson={deletePerson}/>}/>
          <Route path="/new-employee" render={(props)=> <AddTeam {...props} addPerson={addPerson} />}/>
        </Switch>
        <Footer />
      </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
