import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header, GiveMargin } from '../../style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckIn({ ...props }) {
  const [info, setInfo] = useState('name');

  function handleChange(event) {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { nome, email, casa } = info;
    if (casa === '1') {
      toast.warn(`${nome} ${email} A casa 1 ainda não foi limpa!`);
    } else if (casa === '2') {
      toast.warn('A casa 2 ainda não foi limpa!');
    } else {
      props.history.push('/');
    }
  }

  return (
    <GiveMargin>
      <Container>
        <Row>
          <Col md="12">
            <Header />
          </Col>
          <Col md="6">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nome"
                placeholder="Nome do cliente"
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email do cliente"
                onChange={handleChange}
              />
              <select name="casa" onChange={handleChange}>
                <option value="1">Casa do Jardineiro</option>
                <option value="2">Casa da Criada</option>
                <option value="3">Casa do Azeiteiro</option>
                <option value="4">Casa do Ceifeiro</option>
                <option value="5">Casa do Podador</option>
                <option value="6">Casa do Caseiro</option>
                <option value="7">Casa do Guarda</option>
                <option value="8">Casa do Pastor</option>
                <option value="9">Casa da Palha</option>
                <option value="10">Casa dos Bois</option>
                <option value="11">Casa dos Enxertador</option>
                <option value="12">Casa da Eira</option>
                <option value="13">Casa da Francela</option>
                <option value="14">Casa da Lenha</option>
                <option value="15">Casa dos Cavalos</option>
                <option value="16">Casa Mãe</option>
              </select>
              <div>
                <button type="submit">Check In</button>
              </div>
            </form>
            <ToastContainer autoClose={8000} />
          </Col>
        </Row>
      </Container>
    </GiveMargin>
  );
}

export default CheckIn;
