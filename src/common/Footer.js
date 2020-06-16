import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

function Footer({ logout, user, history }) {
  const [conta, setConta] = useState(5);
  function startChat() {
    const a = document.getElementById('zsiq_float');
    const b = document.getElementsByClassName('zsiq_floatmain');
    if (a.style.display === 'block') {
      a.style.display = 'none';
    } else {
      a.style.display = 'block';
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
    console.log(conta);
    if (conta <= 0) {
      casaSuja(user[1].id)
        .then(() => logout())
        .catch(error => error);
    } else {
      setConta(conta - 1);
    }
  }

  return (
    <FooterEl className="fixed-bottom">
      <Container>
        <Row>
          <Col md="1" onClick={checkout} />
          <Col md="2">
            <Link to="/">
              <img src={Checkout} alt="Checkout" />
              <p>Retroceder</p>
            </Link>
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
