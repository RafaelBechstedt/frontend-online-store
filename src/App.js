import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Search } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
