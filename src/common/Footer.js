import React from 'react';
import {FooterEl} from '../style.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkout from '../assets/icones/1.png';
import Chat from '../assets/icones/2.png';
import Notifica from '../assets/icones/3.png';
import Perfil from '../assets/icones/4.png';
import Carrinho from '../assets/icones/5.png';


function Footer(){
  function startChat(){
    const a = document.getElementById('zsiq_float');
    if(a.style.display ==='none'){
    a.style.display = 'block';
    }
    else{
     a.style.display = 'none'; 
    }
  }

  return(
   <FooterEl className="fixed-bottom">
    <Container>
      <Row>
      <Col md='1' />
        <Col md='2'>
          <img src={Checkout} alt="Checkout"/>
          <p>Checkout</p>
        </Col>
        <Col md='2' onClick={startChat}>
          <img src={Chat} alt="Checkout"/>
          <p>Chat</p>
        </Col>
        <Col md='2'>
          <img src={Notifica} alt="Checkout"/>
          <p>Notificações</p>
        </Col>
        <Col md='2'>
          <img src={Perfil} alt="Checkout"/>
          <p>Perfil</p>
        </Col>
        <Col md='2'>
          <img src={Carrinho} alt="Checkout"/>
          <p>Carrinho</p>
        </Col>
        <Col md='1' />
      </Row>
    </Container>
   </FooterEl>
  );
 }

export default Footer;