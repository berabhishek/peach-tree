import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import HeaderComponent from './components/HeaderComponent';
import TransactionView from './components/transactions/TransactionView';
import CapitalView from './components/capitals/CapitalView';
class App extends React.Component {
  render() {
    return (
            <div className="app-routes">
            <HeaderComponent />
            <BrowserRouter>
            <Switch>
              <Route path="/transaction" component={TransactionView} />
              <Route path="/capital" component={CapitalView} />
              <Route path="/" component={Login} />
            </Switch>
            </BrowserRouter>
          </div>
    );
  }
}

export default connect()(App);
