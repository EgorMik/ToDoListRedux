import React from 'react';
import { Route, Switch } from 'react-router-dom';


// import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <Header numItems={5} total={210}/>
      <Switch>
        <Route
          path="/"
        //   component={HomePage}
          exact />

        <Route
          path="/task"
          component={TaskPage}
          />
      </Switch>
    </main>
  );
};

export default App;