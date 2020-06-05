import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './components/HomePage/HomePage';
import ContactosUteis from './components/ContactosUteis/ContactosUteis';
import EncomendarPage from './components/EncomendarPage/EncomendarPage';
import NavegacaoPage from './components/NavegacaoPage/NavegacaoPage';
import Wifi from './components/Wifi/wifi';
import CheckIn from './components/CheckIn/CheckIn';
import Footer from './common/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/checkin" component={CheckIn} />
        <Route exact path="/wifi" component={Wifi} />
        <Route exact path="/encomendar" component={EncomendarPage} />
        <Route exact path="/navegacao" component={NavegacaoPage} />
        <Route exact path="/contactos" component={ContactosUteis} />
      </Switch>
      <Footer />
    </>
  );
}

function mapStateToProps(state) {
  return {
    produtos: state.produtos,
  };
}

export default connect(mapStateToProps)(App);
