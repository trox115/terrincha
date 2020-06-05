import React from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as productActions from '../../actions/Actions';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
/* eslint-disable object-curly-newline */
import styled from 'styled-components';

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

function ModalCart({ ...props }) {
  let allProducts = [];
  const { carrinho } = props;

  allProducts = carrinho.map(produto => (
    <tr>
      <td>{produto.nome}</td>
      <td>{produto.quantidade}</td>
      <td>{produto.preco}</td>
      <td>
        <img src={`/vinhos/${produto.imagem}`} alt="" />
      </td>
      <td>{parseInt(produto.quantidade, 10) * parseInt(produto.preco, 10)}</td>
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
                </tr>
              </thead>
              <tbody>{allProducts}</tbody>
            </Tbl>
          </Row>
        </Container>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    produtos: state.produtos,
    carrinho: state.carrinho,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    insertCart: compras => dispatch(productActions.carrinhoSuccess(compras)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);
