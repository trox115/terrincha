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

function Footer({ logout }) {
  function startChat() {
    const a = document.getElementById('zsiq_float');
    if (a.style.display === 'none') {
      a.style.display = 'block';
    } else {
      a.style.display = 'none';
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
    logout();
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

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout.logout()),
  };
}

export default connect(null, mapDispatchToProps)(Footer);
