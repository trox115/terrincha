import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterEl } from '../style';
import Checkout from '../assets/icones/1.png';
import Chat from '../assets/icones/2.png';
import Notifica from '../assets/icones/3.png';
import Perfil from '../assets/icones/4.png';
import Carrinho from '../assets/icones/5.png';
import * as logout from '../actions/Actions';
import { casaSuja } from '../Api/criarCliente';

function Footer({ logout, user }) {
  console.log(user[1]);
  function startChat() {
    const a = document.getElementById('zsiq_float');
    const b = document.getElementsByClassName('zsiq_floatmain');
    console.log(a.style.visibility);
    if (a.style.visibility === 'hidden') {
      a.style.visibility = 'visible';
    } else {
      a.style.visibility = 'hidden';
    }
  }

  function cart() {
    const pop = document.getElementById('myModal2');
    pop.style.display = 'block';
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function unamed() {
      pop.style.display = 'none';
    };
  }

  function checkout() {
    casaSuja(user[1].id)
      .then(() => logout())
      .catch(error => error);
  }

  return (
    <FooterEl className="fixed-bottom">
      <Container>
        <Row>
          <Col md="1" />
          <Col md="2" onClick={checkout}>
            <img src={Checkout} alt="Checkout" />
            <p>Checkout</p>
          </Col>
          <Col md="2" onClick={startChat}>
            <img src={Chat} alt="Checkout" />
            <p>Chat</p>
          </Col>
          <Col md="2">
            <img src={Notifica} alt="Checkout" />
            <p>Notificações</p>
          </Col>
          <Col md="2">
            <img src={Perfil} alt="Checkout" />
            <p>Perfil</p>
          </Col>
          <Col md="2" onClick={cart}>
            <img src={Carrinho} alt="Checkout" />
            <p>Carrinho</p>
          </Col>
          <Col md="1" />
        </Row>
      </Container>
    </FooterEl>
  );
}

function mapStateToProps(state) {
  return {
    user: state.cliente,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout.logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
