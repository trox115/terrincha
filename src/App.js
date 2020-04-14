import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ContactosUteis from './ContactosUteis/ContactosUteis';
import EncomendarPage from './EncomendarPage/EncomendarPage';
import NavegacaoPage from './NavegacaoPage/NavegacaoPage';
import Wifi from './Wifi/wifi';
import CheckIn from './CheckIn/CheckIn';
import Header from './common/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkin" component={CheckIn} />
        <Route exact path="/wifi" component={Wifi} />
        <Route exact path="/encomendar" component={EncomendarPage} />
        <Route exact path="/navegacao" component={NavegacaoPage} />
        <Route exact path="/contactos" component={ContactosUteis} />
      </Switch>
    </>
  );
}

export default App;
