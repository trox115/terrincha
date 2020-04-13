import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import navegacao from '../navegacao.svg';
import menus from '../menus.svg';
import comprar from '../comprar.svg';
import wifi from '../wifi.svg';
import atividades from '../atividades.svg';
import info from '../info.svg';

function HomePage() {
  return (
    <Container>
      <Row>
        <Col md="4">
          <Link to="/navegacao">
            <img src={navegacao} alt="React Logo" />
            <figcaption>Navegação</figcaption>
          </Link>
        </Col>
        <Col md="4">
          <img src={menus} alt="React Logo" />
          <figcaption>Escolha e nós levamos a sua casa</figcaption>
        </Col>
        <Col md="4">
          <Link to="/encomendar">
            <img src={comprar} alt="React Logo" />
            <figcaption>Encomende e leve para casa</figcaption>
          </Link>
        </Col>
        <Col md="4">
          <Link to="/wifi">
            <img src={wifi} alt="React Logo" />
            <figcaption>Password Wifi</figcaption>
          </Link>
        </Col>
        <Col md="4">
          <img src={atividades} alt="React Logo" />
          <figcaption>Atividades na quinta</figcaption>
        </Col>
        <Col md="4">
          <Link to="/contactos">
            <img src={info} alt="React Logo" />
            <figcaption>Contatos úteis</figcaption>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
