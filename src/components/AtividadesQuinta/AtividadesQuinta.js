import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { InfoHeader, GiveMargin } from '../../style';
import Atividades from '../../assets/img/3.png';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { InserirPA } from '../../Api/criarCliente.js';

const InfoHeader2 = styled.div`
  width: 100%;
  background-color: white;
  text-align: center;
  align-items: center;
  border-radius: 50px;
  text-align: justify;
  p {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 25px;
  }
`;

export const Cartao2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
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
  .btn-link {
    width: 100%;
    text-alig: center;
  }
  .card {
    margin-top: 0;
  }
  .card-header {
    background: pink;
    color: white;
    text-align: center;
    button {
      color: white;
      h1 {
        font-size: 30px;
        width: 100%;
      }
    }
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

function simulateKey(keyCode, type, modifiers) {
  var evtName = typeof type === 'string' ? 'key' + type : 'keydown';
  var modifier = typeof modifiers === 'object' ? modifier : {};

  var event = document.createEvent('HTMLEvents');
  event.initEvent(evtName, true, false);
  event.keyCode = keyCode;

  for (var i in modifiers) {
    event[i] = modifiers[i];
  }

  document.dispatchEvent(event);
}

var onKeyEvent = function(event) {
  var state = 'pressed';

  if (event.type !== 'keypress') {
    state = event.type.replace('key', '');
  }

  console.log('Key with keyCode ' + event.keyCode + ' is ' + state);
};

function AtividadesQuinta({ ...props }) {
  const { user } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      const a = document.getElementById('siqiframe').contentWindow.document;
      const b = a.getElementById('msgarea');
      b.value =
        'Boa tarde gostaria de saber mais acerca das atividades da Quinta';
      b.focus();
      document.addEventListener('keypress', onKeyEvent, false);
      document.addEventListener('keydown', onKeyEvent, false);
      document.addEventListener('keyup', onKeyEvent, false);
      setCount(2);
    }
    if (count == 2) {
      wait(2000);
      var evt = new KeyboardEvent('keydown', { keyCode: 188, which: 188 });
      document.dispatchEvent(evt);
    }
  }, [count]);

  function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }
  function teste() {
    console.log('fdp');
    setCount(1);
  }
  const write = async (a, b) => {
    console.log('hey');
    eventFire(a, b);
    teste();
  };

  function eventFire(el, etype) {
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
      write();
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  function handleClick() {
    const a = document.getElementById('zsiq_float');
    const b = document.getElementsByClassName('zsiq_floatmain');

    if (a.style.display === 'block') {
      a.style.display = 'none';
    } else {
      a.style.display = 'block';
      console.log('mal');
      write(document.getElementById('zsiq_float'), 'click');
    }
  }

  return (
    <GiveMargin>
      <Container>
        <Row>
          <Col md="12">
            <InfoHeader>
              <h1>Atividades na Quinta</h1>
              <img src={Atividades} alt="icone de Atividades" />
            </InfoHeader>
          </Col>
          <Col md="12">
            <Cartao2>
              <InfoHeader2>
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <h1>Prova Rústica</h1>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <li>Pão Regional</li>
                        <li>Água Mineral</li>
                        <li>Queijo de ovelha Terrincha Meia Cura</li>
                        <li>Azeite Virgem Extra</li>
                        <li>Vinho Quinta da Terrincha Doc Douro Branco</li>
                        <li>Vinho Quinta da Terrincha Doc Douro Rosé</li>
                        <li>Vinho Quinta da Terrincha Doc Douro Tinto</li>
                        <li>Vinho Terras da Vilariça Doc Douro Tinto</li>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <h1>Prova Vintage</h1>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <li>Pão Regional</li>
                        <li>Bola de Carne Caseira</li>
                        <li>Água Mineral</li>
                        <li>Variedade de Compotas da Terrincha</li>
                        <li>Queijo de ovelha Terrincha Meia Cura</li>
                        <li>Azeite Virgem Extra</li>
                        <li>Vinho Quinta da Terrincha Doc Douro Branco</li>
                        <li>Vinho Quinta da Terrincha Doc Douro Rosé</li>
                        <li>Vinho Quinta da Terrincha Doc Douro Tinto</li>
                        <li>Vinho Quinta da Terrincha Tinto Lote T14</li>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </InfoHeader2>
            </Cartao2>

            <Cartao3>
              <InfoHeader3>
                <Compra onClick={handleClick}> Pedir Mais Informações </Compra>
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

export default connect(mapStateToProps, null)(AtividadesQuinta);
