import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../pages/home-page';
import Form from '../../pages/add-form-page';
// import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
     
      <Switch>
        <Route
          path="/"
         component={HomePage}
          exact />
        <Route
          path="/form"
          component={Form}
          />
      </Switch>
    </main>
  );
};

export default App;