import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Produtos, ImagePlaceholder, PrecoCompra, Compra } from '../../style';
import Carrinho from '../../assets/icones/5.png';

function Modal({ ...props }) {
  const { produto } = props;
  const [qtdd, setqtdd] = useState({
    quantidade: 1,
  });
  let total = qtdd.quantidade * produto.preco;
  useEffect(() => {
    total = qtdd * produto.preco;
  }, [qtdd]);

  function handleChange(event) {
    const novaquantidade = parseInt(event.target.value, 10);
    setqtdd({ [event.target.name]: event.target.value });
    console.log(qtdd);
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
                    <Compra>
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

export default Modal;
