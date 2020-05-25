import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Cartao,Header} from '../style.js';
import Navegacao from '../assets/img/1.png';


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
       
      </Row>
    </Container>
  );
}

export default HomePage;
