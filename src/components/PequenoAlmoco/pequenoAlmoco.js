import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { InfoHeader, GiveMargin } from '../../style';
import Pequeno from '../../assets/img/6.png';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

const InfoHeader3 = styled.div`
  width: 100%;
  background-color: white;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  text-align: center;
  height: 80px;
  input {
    margin-top: 5%;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 25px;
    border: none;
    border-bottom: 1px solid pink;
  }
`;

export const Cartao3 = styled.div`
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

export const Compra = styled.button`
  font-size: 25px;
  background-color: #e84865;
  color: white;
  border: none;
  height: 50px;
  margin-left: 10px;
  border-radius: 10px;
  padding: 0 20px 0 20px;
  align-itens: center;
  justify-content: center;
`;

function PequenoAlmoco({ ...props }) {
  const { user } = props;
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 8),
  );

  function handleClick() {
    console.log(startDate);
    console.log(user[0].id);
  }

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

            <Cartao3>
              <InfoHeader3>
                <DatePicker
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  locale="pt-PT"
                  showTimeSelect
                  timeFormat="p"
                  timeIntervals={30}
                  dateFormat="Pp"
                  includeTimes={[
                    setHours(setMinutes(new Date(), 0), 8),
                    setHours(setMinutes(new Date(), 30), 8),
                    setHours(setMinutes(new Date(), 0), 9),
                    setHours(setMinutes(new Date(), 30), 9),
                    setHours(setMinutes(new Date(), 0), 10),
                    setHours(setMinutes(new Date(), 30), 10),
                  ]}
                  dateFor
                />
                <Compra onClick={handleClick}> Submeter </Compra>
              </InfoHeader3>
            </Cartao3>
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
