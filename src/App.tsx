import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Top from './components/Top';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={Top} />
        <Redirect to="/" />;
      </Switch>
    </div>
  );
};

export default App;
