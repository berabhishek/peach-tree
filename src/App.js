import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld';
import TableView from './components/TableView';
import Login from './components/Login';

class App extends React.Component {
  render() {
    // const headers = ["Date", "Beneficiary Name", "Payment Type", "Amount"];
    return (
      // <div className="App">
        // <header className="App-header">
            /* <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a> */
            /* <HelloWorld></HelloWorld> */
            // <TableView headers={headers
            // }/>
            <div className="app-routes">
            <BrowserRouter>
            <Switch>
              <Route path="/dashboard" component={HelloWorld} />
              <Route path="/" component={Login} />
            </Switch>
            </BrowserRouter>
          </div>
            
        // </header>
    // </div>
    );
  }
}

export default connect()(App);
