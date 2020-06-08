import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { InfoHeader, GiveMargin } from '../../style';
import Pequeno from '../../assets/img/6.png';

const InfoHeader2 = styled.div`
  width: 100%;
  background-color: white;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  text-align: justify;
  p {
    margin-top: 5%;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 25px;
  }
`;

export const Cartao2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 5%;
  color: #282828;
  h1 {
    font-size: 20px;
    width: 60%;
    margin-left: 2%;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }

  img {
    width: 55px;
    height: 55px;
    display: flex-end;
  }
`;

function PequenoAlmoco({ ...props }) {
  const { user } = props;
  return (
    <GiveMargin>
      <Container>
        <Row>
          <Col md="12">
            <InfoHeader>
              <h1>Pequeno Almoço</h1>
              <img src={Pequeno} alt="icone de pequeno Almoço" />
            </InfoHeader>
          </Col>
          <Col md="12">
            <Cartao2>
              <InfoHeader2>
                <p>Estimado(a) {user[0].name},</p>
                <p>
                  Tendo em consideração o momento que vivemos e de modo a
                  proteger a sua saúde, informamos que o pequeno-almoço será
                  entregue na Villa. O horário será diariamente das 8:00 horas
                  até ás 10:30
                </p>
                <p>
                  Deste modo, gostariamos que nos desse a conhecer o seu horário
                  preferido para que possámos servi-lo melhor.
                </p>
                <p>Obrigado</p>
              </InfoHeader2>
            </Cartao2>

            <Cartao2>
              <InfoHeader2>
                <input type="date" />
                <input type="time" />
              </InfoHeader2>
            </Cartao2>
          </Col>
        </Row>

        <br />
        <br />
      </Container>
    </GiveMargin>
  );
}

function mapStateToProps(state) {
  return {
    user: state.cliente,
  };
}

export default connect(mapStateToProps, null)(PequenoAlmoco);
