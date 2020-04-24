import React from 'react';
import Filters from './components/Filters';
import PatientReport from './components/patientComponents/PatientReport';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import './styles/main.scss'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/Patient/:id" component={PatientReport} />
          <Route exact path="/" component={Filters} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
