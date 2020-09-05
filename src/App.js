import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import TableView from './components/TableView';
import Login from './components/auth/Login';
import TransactionView from './components/transactions/TransactionView';
class App extends React.Component {
  render() {
    return (
            <div className="app-routes">
            <BrowserRouter>
            <Switch>
              <Route path="/dashboard" component={HelloWorld} />
              <Route path="/" component={Login} />
            </Switch>
            </BrowserRouter>
          </div>
    );
  }
}

export default connect()(App);
