import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as productActions from '../../actions/Actions';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
/* eslint-disable object-curly-newline */
import { Produtos, ImagePlaceholder, PrecoCompra, Compra } from '../../style';
import Carrinho from '../../assets/icones/5.png';

function Modal({ ...props }) {
  const { produto, insertCart } = props;
  const [qtdd, setqtdd] = useState({
    quantidade: 1,
  });
  let total = 0;
  useEffect(() => {
    total = qtdd.quantidade * produto.preco;
  }, [qtdd]);

  function handleChange(event) {
    setqtdd({ [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let compra = produto;
    compra.quantidade = qtdd.quantidade;
    insertCart([compra]);
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <Container>
          <Row>
            <Col md="12" key={produto.id}>
              <Produtos>
                <ImagePlaceholder>
                  <img
                    src={`/vinhos/${produto.imagem}`}
                    alt="icone-navegacao"
                  />
                </ImagePlaceholder>
                <div>
                  <h1 className="titulo">{produto.nome}</h1>
                  <h2 className="designacao">{produto.descricao}</h2>
                  <p>{produto.ano}</p>
                  <PrecoCompra>
                    <p className="preco">{`${produto.preco}€`}</p>
                    <input
                      type="number"
                      step="1"
                      value={qtdd.quantidade}
                      name="quantidade"
                      onChange={handleChange}
                    />
                    <Compra onClick={handleSubmit}>
                      Adicionar ao Carrinho
                      <img src={Carrinho} alt="carrinho" />
                    </Compra>
                  </PrecoCompra>
                  <p>
                    Total:
                    {total}
                  </p>
                </div>
              </Produtos>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

Modal.propTypes = {
  produto: PropTypes.instanceOf(Array).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    insertCart: compras => dispatch(productActions.carrinhoSuccess(compras)),
  };
}

export default connect(null, mapDispatchToProps)(Modal);
