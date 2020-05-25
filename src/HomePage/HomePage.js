import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Cartao, Header } from '../style.js';
import Navegacao from '../assets/img/1.png';
import EntregaCasa from '../assets/img/2.png';
import Atividades from '../assets/img/3.png';
import Encomendar from '../assets/img/5.png';
import Social from '../assets/img/4.png';
import Pequeno from '../assets/img/6.png';
import Wifi from '../assets/img/7.png';
import Contactos from '../assets/img/8.png';

function HomePage() {
  return (
    <Container>
      <Row>
        <Col md="12">
          <Header />
        </Col>
        <Col md="6">
          <Cartao>
            <h1>Navegação</h1>
            <img src={Navegacao} alt="icone-navegacao" />
          </Cartao>
        </Col>
        <Col md="6">
          <Cartao>
            <h1>Escolha e será entregue em sua casa</h1>
            <img src={EntregaCasa} alt="icone-navegacao" />
          </Cartao>
        </Col>
        <Col md="6">
          <Cartao>
            <h1>Atividades na Quinta</h1>
            <img src={Atividades} alt="icone-navegacao" />
          </Cartao>
        </Col>
        <Col md="6">
          <Cartao>
            <h1>Encomende e leve para casa</h1>
            <img src={Encomendar} alt="icone-navegacao" />
          </Cartao>
        </Col>
        <Col md="6">
          <Cartao>
            <h1>Terrincha nas redes sociais</h1>
            <img src={Social} alt="icone-navegacao" />
          </Cartao>
        </Col>
        <Col md="6">
          <Cartao>
            <h1>Horas de Pequeno Almoço</h1>
            <img src={Pequeno} alt="icone-navegacao" />
          </Cartao>
        </Col>
        <Col md="6">
          <Cartao>
            <h1>Pasword Wifi</h1>
            <img src={Wifi} alt="icone-navegacao" />
          </Cartao>
        </Col>
        <Col md="6">
          <Cartao>
            <h1>Contactos úteis</h1>
            <img src={Contactos} alt="icone-navegacao" />
          </Cartao>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
