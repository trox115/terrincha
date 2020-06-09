import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ProtectedRoute from './containers/protected.route';
import HomePage from './components/HomePage/HomePage';
import ContactosUteis from './components/ContactosUteis/ContactosUteis';
import EncomendarPage from './components/EncomendarPage/EncomendarPage';
import NavegacaoPage from './components/NavegacaoPage/NavegacaoPage';
import Wifi from './components/Wifi/wifi';
import Sociais from './components/Sociais/Sociais';
import CheckIn from './components/CheckIn/CheckIn';
import PequenoAlmoco from './components/PequenoAlmoco/pequenoAlmoco';
import atividadesQuinta from './components/AtividadesQuinta/AtividadesQuinta';
import ModalCart from './components/ModalCart/ModalCart';
import Footer from './common/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <ModalCart />
      <Switch>
        <Route exact path="/checkin" component={CheckIn} />
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute exact path="/wifi" component={Wifi} />
        <ProtectedRoute exact path="/pequenoalmoco" component={PequenoAlmoco} />
        <ProtectedRoute
          exact
          path="/atividadesQuinta"
          component={atividadesQuinta}
        />
        <ProtectedRoute exact path="/sociais" component={Sociais} />
        <ProtectedRoute exact path="/encomendar" component={EncomendarPage} />
        <ProtectedRoute exact path="/navegacao" component={NavegacaoPage} />
        <ProtectedRoute exact path="/contactos" component={ContactosUteis} />
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
