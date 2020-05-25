import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {
  InfoHeader,
  Produtos,
  GiveMargin,
  ImagePlaceholder,
  PrecoCompra,
  Compra,
} from '../style';
import Entrega from '../assets/img/5.png';
import Carrinho from '../assets/icones/5.png';
import Vinho from '../assets/img/vinhos/1-tinto.png';

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
            <ImagePlaceholder>
              <img src={Vinho} alt="icone-navegacao" />
            </ImagePlaceholder>
            <div>
              <h1 className="titulo">Quinta da Terrincha</h1>
              <h2 className="designacao">Doc Douro Tinto</h2>
              <p>2013</p>
              <PrecoCompra>
                <p className="preco">7€</p>
                <Compra>
                  Comprar
                  <img src={Carrinho} alt="" />
                </Compra>
              </PrecoCompra>
            </div>
          </Produtos>
        </Col>
      </Row>
    </Container>
  );
}

export default EncomendarPage;
