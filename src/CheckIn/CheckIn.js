import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      toast.warn('A casa 1 ainda não foi limpa!');
    } else if (casa === '2') {
      toast.warn('A casa 2 ainda não foi limpa!');
    } else {
      props.history.push('/');
    }
  }

  return (
    <Container>
      <Row className="align-items-center">
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
              <option value="1">Casa 1</option>
              <option value="2">Casa 2</option>
              <option value="3">Casa 3</option>
            </select>
            <button type="submit">Check IN</button>
          </form>
          <ToastContainer autoClose={8000} />
        </Col>
      </Row>
    </Container>
  );
}

export default CheckIn;
