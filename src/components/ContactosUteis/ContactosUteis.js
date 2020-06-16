import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { InfoHeader, Cartao, GiveMargin } from '../../style';
import contacto from '../../assets/img/8.png';

const InfoHeader2 = styled.div`
  width: 100%;
  background-color: white;
  text-align: center;
  align-items: center;
  border-radius: 50px;

  p {
    margin-top: 5%;
    font-size: 25px;
  }
`;

function ContactosUteis() {
  return (
    <GiveMargin>
      <Container>
        <Row>
          <Col md="12">
            <InfoHeader>
              <h1>Contactos Úteis</h1>
              <img src={contacto} alt="icone de contacto" />
            </InfoHeader>
          </Col>
          <Col md="6">
            <Cartao>
              <InfoHeader2>
                <p>GNR de Moncorvo</p>
                <p>279 254 115</p>
              </InfoHeader2>
            </Cartao>
          </Col>
          <Col md="6">
            <Cartao>
              <InfoHeader2>
                <p>Bombeiros de Moncorvo</p>
                <p>279 200 200</p>
              </InfoHeader2>
            </Cartao>
          </Col>
          <Col md="6">
            <Cartao>
              <InfoHeader2>
                <p>Centro de saúde de Foz Côa</p>
                <p>279 760 050</p>
              </InfoHeader2>
            </Cartao>
          </Col>
          <Col md="6">
            <Cartao>
              <InfoHeader2>
                <p>Contacto de Emergência Quinta da Terrincha</p>
                <p>915 946 705</p>
              </InfoHeader2>
            </Cartao>
          </Col>
        </Row>

        <br />
        <br />
      </Container>
    </GiveMargin>
  );
}
export default ContactosUteis;
