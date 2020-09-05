import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import Login from './components/auth/Login';
import HeaderComponent from './components/HeaderComponent';
class App extends React.Component {
  render() {
    return (
            <div className="app-routes">
            <HeaderComponent />
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
