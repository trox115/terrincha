import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import * as productActions from '../../actions/Actions';
import { Header, GiveMargin } from '../../style';
import 'react-toastify/dist/ReactToastify.css';
import { casaOcupad } from '../../Api/criarCliente';

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

function CheckIn({ history, ...props }) {
  let casaSort = [];
  const [form, setState] = useState({
    name: '',
    email: '',
    phone: '123456789',
    password: '123456',
    password_confirmation: '123456',
    casa: '1',
  });
  const {
    loadCasas, casas, registarCliente, adicionarCasa,
  } = props;
  useEffect(() => {
    if (casas.length <= 0) {
      loadCasas();
    }
  }, [casas, loadCasas, casaSort]);
  function handleChange(event) {
    setState({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function sendError(casa) {
    if (casa.limpa === false) {
      toast.error(`Lamentamos mas a ${casa.nome} não se encontra limpa`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`Lamentamos mas a ${casa.nome} está ocupada`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const casa = casas.find(x => x.id == parseInt(form.casa, 10));
    if (casa.limpa && casa.ocupada === false) {
      registarCliente(form)
        .then(() => {
          casaOcupad(casa)
            .then(() => {
              adicionarCasa(casa);
              history.push('/');
            })
            .catch(error => error);
        })
        .catch(error => error);
    } else {
      sendError(casa);
    }
  }
  let allCasas = [];
  allCasas = casas.map(casa => <option value={casa.id}>{casa.nome}</option>);
  casaSort = allCasas.sort(
    (a, b) => parseInt(a.props.value, 10) - parseInt(b.props.value, 10),
  );
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
                  name="name"
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
                  {casaSort}
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
    registarCliente: form => dispatch(productActions.Client(form)),
    adicionarCasa: casa => dispatch(productActions.adicionarCasa(casa)),
  };
}

function mapStateToProps(state) {
  return {
    casas: state.casas,
    form: state.form,
  };
}

CheckIn.propTypes = {
  loadCasas: PropTypes.func.isRequired,
  registarCliente: PropTypes.func.isRequired,
  adicionarCasa: PropTypes.func.isRequired,
  casas: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
