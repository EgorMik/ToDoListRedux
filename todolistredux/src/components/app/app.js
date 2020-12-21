import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {HomePage} from '../add-form/add-form';
import Header from '../header/header';
// import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <Header/>
      <Switch>
        <Route
          path="/"
         component={HomePage}
          exact />

        <Route
          path="/form"
          // component={TaskPage}
          />
      </Switch>
    </main>
  );
};

export default App;