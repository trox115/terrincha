import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Cartao, Header, GiveMargin } from '../../style';
import Navegacao from '../../assets/img/1.png';
import EntregaCasa from '../../assets/img/2.png';
import Atividades from '../../assets/img/3.png';
import Encomendar from '../../assets/img/5.png';
import Social from '../../assets/img/4.png';
import Pequeno from '../../assets/img/6.png';
import Wifi from '../../assets/img/7.png';
import Contactos from '../../assets/img/8.png';

function HomePage() {
  return (
    <GiveMargin>
      <Container>
        <Row>
          <Col md="12">
            <Header />
          </Col>
          <Col md="6">
            <Link to="/navegacao">
              <Cartao>
                <h1>Navegação</h1>
                <img src={Navegacao} alt="icone-navegacao" />
              </Cartao>
            </Link>
          </Col>
          <Col md="6">
            <Link to="/entrega">
              <Cartao>
                <h1>Entrega em Casa</h1>
                <img src={EntregaCasa} alt="icone-navegacao" />
              </Cartao>
            </Link>
          </Col>
          <Col md="6">
            <Link to="/atividadesQuinta">
              <Cartao>
                <h1>Atividades na Quinta</h1>
                <img src={Atividades} alt="icone-navegacao" />
              </Cartao>
            </Link>
          </Col>
          <Col md="6">
            <Link to="/encomendar">
              <Cartao>
                <h1>Produtos da Quinta</h1>
                <img src={Encomendar} alt="icone-navegacao" />
              </Cartao>
            </Link>
          </Col>
          <Col md="6">
            <Link to="/sociais">
              <Cartao>
                <h1>Terrincha nas redes sociais</h1>
                <img src={Social} alt="icone-navegacao" />
              </Cartao>
            </Link>
          </Col>
          <Col md="6">
            <Link to="/pequenoalmoco">
              <Cartao>
                <h1>Horas de Pequeno Almoço</h1>
                <img src={Pequeno} alt="icone-pequenoalmoço" />
              </Cartao>
            </Link>
          </Col>
          <Col md="6">
            <Link to="/restaurante">
              <Cartao>
                <h1>Restaurante</h1>
                <img src={EntregaCasa} alt="icone-navegacao" />
              </Cartao>
            </Link>
          </Col>
          <Col md="6">
            <Link to="/contactos">
              <Cartao>
                <h1>Menus Degustação</h1>
                <img src={Encomendar} alt="icone-navegacao" />
              </Cartao>
            </Link>
          </Col>
          <Col md="6">
            <Link to="/wifi">
              <Cartao>
                <h1>Pasword Wifi</h1>
                <img src={Wifi} alt="icone-navegacao" />
              </Cartao>
            </Link>
          </Col>
          <Col md="6">
            <Link to="/contactos">
              <Cartao>
                <h1>Contactos úteis</h1>
                <img src={Contactos} alt="icone-navegacao" />
              </Cartao>
            </Link>
          </Col>
        </Row>
      </Container>
    </GiveMargin>
  );
}

export default HomePage;
