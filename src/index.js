import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginPage from "./LoginPage";
import CreateAccountPage from "./CreateAccountPage";

const Index = () => {
  return (
    <BrowserRouter>
      <h1>LenderClose Directory</h1>
      <Switch>
        <Route path="/directory/:user_id" exact >
          <App />
        </Route>
        <Route path="/create-account">
          <CreateAccountPage/>
        </Route>
        <Route path="/">
         <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Index;

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
