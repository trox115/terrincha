import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
/* eslint-disable object-curly-newline */
import styled from 'styled-components';
import * as productActions from '../../actions/Actions';
import { Compra } from '../../style';

const Tbl = styled.table`
  width: 100%;
  text-align: center;
  border: 1px solid gray;
  border-radius: 30px;
  thead {
    background: pink;
    color: white;
  }
  img {
    max-height: 60px;
  }
`;

function inserirEncomenda(cliente_id, produto_id, quantidade) {
  console.log(cliente_id);
  return axios
    .post(
      'http://localhost:3001/encomenda/create',
      {
        encomenda: {
          cliente_id,
          produto_id,
          quantidade,
        },
      },
      true,
    )
    .then(response => response)
    .catch(error => error);
}

const UltimoPasso = styled.div`
  display: block;
`;

function ModalCart({ ...props }) {
  let allProducts = [];
  const { carrinho, user, Encomendar } = props;
  let total = 0;
  total = carrinho.reduce(
    (accum, item) => accum + item.quantidade * item.preco,
    0,
  );

  function handleClick() {
    const placeEncomenda = carrinho.map(produto => [
      user[0].id,
      produto.id,
      parseInt(produto.quantidade, 10),
    ]);
    for (let i = 0; i < placeEncomenda.length; i += 1) {
      inserirEncomenda(
        placeEncomenda[i][0],
        placeEncomenda[i][1],
        placeEncomenda[i][2],
      );
    }
    Encomendar();
  }

  allProducts = carrinho.map(produto => (
    <tr key={produto.id}>
      <td>{produto.nome}</td>
      <td>{produto.quantidade}</td>
      <td>{produto.preco}€</td>
      <td>
        <img src={`/vinhos/${produto.imagem}`} alt="" />
      </td>
      <td>{parseInt(produto.quantidade, 10) * parseInt(produto.preco, 10)}€</td>
      <td>
        <span className="remover">&times;</span>
      </td>
    </tr>
  ));

  return (
    <div id="myModal2" className="modal2">
      <div className="modal-content">
        <span className="close">&times;</span>
        <Container>
          <Row>
            <Col md="12">
              <h2>Carrinho</h2>
            </Col>
            <Tbl>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Preço</th>
                  <th>Imagem</th>
                  <th>Total</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>{allProducts}</tbody>
            </Tbl>
            <UltimoPasso>
              <h4>
                Total:
                {total}€
              </h4>
              <Compra onClick={handleClick}>Finalizar</Compra>
            </UltimoPasso>
          </Row>
        </Container>
      </div>
    </div>
  );
}

ModalCart.propTypes = {
  carrinho: PropTypes.instanceOf(Array).isRequired,
};
function mapStateToProps(state) {
  return {
    user: state.cliente,
    produtos: state.produtos,
    carrinho: state.carrinho,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Encomendar: () => dispatch(productActions.EncomendaSuccess()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);
