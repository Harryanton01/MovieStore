import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import GamePage from './pages/gamePage';
import CartPage from './pages/cartPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={GamePage} exact />
          <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
}

export default App;
