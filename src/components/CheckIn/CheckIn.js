import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as productActions from '../../actions/Actions';
import { Header, GiveMargin } from '../../style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const Formulario = styled.form`
  margin: 0 auto;
  input {
    border: none;
    border-bottom: 1px solid pink;
    width: 100%;
    margin-bottom: 15px;
  }
  select {
    border: none;
    border-bottom: 1px solid pink;
    width: 100%;
    margin-bottom: 15px;
    background: pink;
    color: white;
  }
`;

const Botao = styled.div`
  text-align: center;
  button {
    background: pink;
    color: white;
    margin-bottom: 30px;
    width: 80%;
  }
`;
const Cartao = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 5%;
  color: #282828;
`;

function CheckIn({ ...props }) {
  const [info, setInfo] = useState('name');
  const { loadCasas, casas } = props;
  useEffect(() => {
    if (casas.length <= 0) {
      loadCasas();
    }
  }, [casas, loadCasas]);
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
  let allCasas = [];
  allCasas = casas.map(casa => <option value={casa.id}>{casa.nome}</option>);
  return (
    <GiveMargin>
      <Container>
        <Row>
          <Col md="12">
            <Header />
          </Col>
          <Col md="12">
            <Cartao>
              <Formulario onSubmit={handleSubmit} className="inicio">
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
                  {allCasas}
                </select>
                <Botao>
                  <button type="submit" className="btn btn-primary">
                    Check In
                  </button>
                </Botao>
              </Formulario>
            </Cartao>
            <ToastContainer autoClose={8000} />
          </Col>
        </Row>
      </Container>
    </GiveMargin>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    loadCasas: () => dispatch(productActions.Casas()),
  };
}

function mapStateToProps(state) {
  return {
    casas: state.casas,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
