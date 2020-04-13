import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import qrcode from '../qrcode.jpg';

const Hidding = styled.div`
  img {
    display: none;
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
    <Container>
      <Row>
        <Col md="3">
          <h2>Wifi Password:</h2>
        </Col>
        <Col md="2">
          <p>112233445566</p>
        </Col>
        <Col md="7">
          <Hidding>
            <img
              id="qrcode"
              className="hidding"
              src={qrcode}
              alt="password e rede de internet"
            />
          </Hidding>
        </Col>
      </Row>

      <br />
      <br />
      <Button className="btn btn-primary" onClick={handleClick}>
        Gerar QR Code
      </Button>
    </Container>
  );
}
export default Wifi;
