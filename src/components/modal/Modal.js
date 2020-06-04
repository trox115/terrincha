import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {
  InfoHeader,
  Produtos,
  GiveMargin,
  ImagePlaceholder,
  PrecoCompra,
  Compra,
} from '../../style';
import Entrega from '../../assets/img/5.png';
import Carrinho from '../../assets/icones/5.png';

function Modal({ ...props }) {
  console.log(props.produto);

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <Container>
          <Row>
            <Col md="12" key={props.produto.id}>
              <Produtos>
                <ImagePlaceholder>
                  <img
                    src={`/vinhos/${props.produto.imagem}`}
                    alt="icone-navegacao"
                  />
                </ImagePlaceholder>
                <div>
                  <h1 className="titulo">{props.produto.nome}</h1>
                  <h2 className="designacao">{props.produto.descricao}</h2>
                  <p>{props.produto.ano}</p>
                  <PrecoCompra>
                    <p className="preco">{`${props.produto.preco}€`}</p>
                    <input type="number" placeholder="quantidade" />
                    <Compra>
                      Adicionar ao Carrinho
                      <img src={Carrinho} alt="carrinho" />
                    </Compra>
                  </PrecoCompra>
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
