import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { InfoHeader, Cartao, GiveMargin } from '../../style';
import Social from '../../assets/img/4.png';
import facebook from '../../assets/social/face.png';
import instagram from '../../assets/social/insta.png';
import redes from '../../assets/social/desenho-redes.png';

const InfoHeader2 = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;

  p {
    margin-top: 5%;
    font-size: 25px;
    margin-left: 10%;
  }

  img {
    height: 50px;
    margin-right: 5%;
  }
`;

const Texto = styled.div`
  margin-top: 50px;
  p {
    font-size: 25px;
    text-align: justify;
  }
  img {
    width: 50%;
    float: right;
    margin-right: 15%;
    margin-top: -100px;
  }
`;

function Sociais({ ...props }) {
  return (
    <GiveMargin>
      <Container>
        <Row>
          <Col md="12">
            <InfoHeader>
              <h1>Redes Sociais</h1>
              <img src={Social} alt="icone de wifi" />
            </InfoHeader>
          </Col>
          <Col md="6">
            <Cartao>
              <InfoHeader2>
                <p>quintadaterrincha</p>
                <img src={facebook} alt="icone de facebook" />
              </InfoHeader2>
            </Cartao>
          </Col>
          <Col md="6">
            <Cartao>
              <InfoHeader2>
                <p>@quintadaterrincha</p>
                <img src={instagram} alt="icone instagram" />
              </InfoHeader2>
            </Cartao>
          </Col>
          <Texto>
            <Col md="6">
              <p>
                Ajude-nos a alcançar mais pessoas, se tirar uma foto na nossa
                quinta, por favor identifique-nos ou insira a hashtag('#')
                quinta da terrincha
              </p>
            </Col>
            <Col md="12">
              <img src={redes} alt="imagem redes sociais" />
            </Col>
          </Texto>
        </Row>

        <br />
        <br />
      </Container>
    </GiveMargin>
  );
}

export default Sociais;
