import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { InfoHeader, Produtos, GiveMargin } from '../style';
import Entrega from '../assets/img/5.png';
import Vinho from '../assets/img/vinhos/1.png';

function EncomendarPage() {
  return (
    <Container>
      <Row>
        <InfoHeader>
          <h1>Encomende e leve para casa</h1>
          <img src={Entrega} alt="icone de entrega" />
        </InfoHeader>
        <Col md="6">
          <Produtos>
            <img src={Vinho} alt="icone-navegacao" />
            <div>
              <h1 className="titulo">Quinta da Terrincha</h1>
              <h2 className="designacao">Doc Douro Tinto</h2>
              <p>2013</p>
              <p className="preco">7€</p>
              <button>Comprar</button>
            </div>
          </Produtos>
        </Col>
      </Row>
    </Container>
  );
}

export default EncomendarPage;
