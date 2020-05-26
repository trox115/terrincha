import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { InfoHeader, Cartao, GiveMargin } from '../style';
import wifi from '../assets/img/7.png';
import qrcode from '../qrcode.jpg';

const Hidding = styled.div`
  text-align: center;
  width: 100%;
  img {
    display: none;
    width: 350px;
    height: 350px;
    margin-bottom: 30px;
  }

  button {
    width: 100%;
    background: #f3a6bc;
    border-color: #f09898;
    &:hover {
      background: #f09898;
      color: black;
      border-color: #f3a6bc;
    }
  }
`;

function Wifi() {
  function handleClick() {
    var x = document.getElementById('qrcode');

    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

  return (
    <GiveMargin>
      <Container>
        <Row>
          <Col md="12">
            <InfoHeader>
              <h1>Password do Wifi</h1>
              <img src={wifi} alt="icone de wifi" />
            </InfoHeader>
          </Col>
          <Col md="12">
            <Cartao>
              <h1>Wifi Password:</h1>
              <span>112233445566</span>
            </Cartao>
          </Col>
          <Hidding>
            <Col md="12" align="center">
              <img
                id="qrcode"
                className="hidding"
                src={qrcode}
                alt="password e rede de internet"
              />
            </Col>
            <Col md="12">
              <Button className="btn btn-primary" onClick={handleClick}>
                Gerar QR Code
              </Button>
            </Col>
          </Hidding>
        </Row>

        <br />
        <br />
      </Container>
    </GiveMargin>
  );
}
export default Wifi;
