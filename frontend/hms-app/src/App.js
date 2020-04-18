import React from 'react';
import Filters from './components/Filters';
import PatientReport from './components/patientComponents/PatientReport';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Patient/:id" component={PatientReport} />
          <Route exact path="/" component={Filters} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
