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

  //sets inital team array from teams.json
  useEffect(() => {
    setTeam(teams);
  },[]);

  //add a new person object to the array
  const addPerson = (person) => {
    setTeam(team => [...team, person]);
  };

  //replace the person in array specified with a new object
  const updatePerson = (person) => {
   console.log("app person update", person)
   setTeam(team.map((teammember) => {
    return teammember.id === person.id ? person : teammember;
  }));
  };

  //delete team member based on id
  const deletePerson = (person) => {
    setTeam(team.filter((teammember) => teammember.id !== person.id));
   };

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
