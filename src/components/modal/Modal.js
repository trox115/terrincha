import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify';
import * as productActions from '../../actions/Actions';
/* eslint-disable object-curly-newline */
import { Produtos, ImagePlaceholder, PrecoCompra, Compra } from '../../style';
import Carrinho from '../../assets/icones/5.png';

function Modal({ ...props }) {
  const { produto, insertCart } = props;
  const [qtdd, setqtdd] = useState({
    quantidade: 1,
  });
  let total = qtdd.quantidade * produto.preco;
  useEffect(() => {
    total = qtdd.quantidade * produto.preco;
  }, [qtdd]);

  function handleChange(event) {
    setqtdd({ [event.target.name]: event.target.value });
  }

  function sendToast() {
    toast.success('O produto foi adicionado ao carrinho', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const compra = produto;
    compra.quantidade = qtdd.quantidade;
    insertCart([compra]);
    sendToast();
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
                  <span>{produto.ano}</span><span className="preco">{`${produto.preco}€`}</span>
                  <PrecoCompra>
                    
                    <input
                      type="number"
                      step="1"
                      value={qtdd.quantidade}
                      name="quantidade"
                      onChange={handleChange}
                    />
                    <Compra onClick={handleSubmit}>
                      Adicionar
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
        <ToastContainer autoClose={8000} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  produto: PropTypes.instanceOf(Array).isRequired,
  insertCart: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    insertCart: compras => dispatch(productActions.carrinhoSuccess(compras)),
  };
}

export default connect(null, mapDispatchToProps)(Modal);
