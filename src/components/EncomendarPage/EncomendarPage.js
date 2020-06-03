import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import * as productActions from '../../actions/Actions';
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

function EncomendarPage({ ...props }) {
  const { loadProdutos } = props;
  const { produtos } = props;
  useEffect(() => {
    if (produtos.length <= 0) {
      loadProdutos();
    }
  }, [produtos, loadProdutos]);
  let allProdutos = [];

  allProdutos = produtos.map(produto => (
    <Col md="6" key={produto.id}>
      <Produtos>
        <ImagePlaceholder>
          <img src={`/vinhos/${produto.imagem}`} alt="icone-navegacao" />
        </ImagePlaceholder>
        <div>
          <h1 className="titulo">{produto.nome}</h1>
          <h2 className="designacao">{produto.descricao}</h2>
          <p>{produto.ano}</p>
          <PrecoCompra>
            <p className="preco">{`${produto.preco}€`}</p>
            <Compra>
              Comprar
              <img src={Carrinho} alt="carrinho" />
            </Compra>
          </PrecoCompra>
        </div>
      </Produtos>
    </Col>
  ));
  return (
    <GiveMargin>
      <Container>
        <Row>
          <InfoHeader>
            <h1>Encomende e leve para casa</h1>
            <img src={Entrega} alt="icone de entrega" />
          </InfoHeader>

          {allProdutos}
        </Row>
      </Container>
    </GiveMargin>
  );
}

EncomendarPage.propTypes = {
  loadProdutos: PropTypes.func.isRequired,
  produtos: PropTypes.instanceOf(Array).isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    loadProdutos: () => dispatch(productActions.Produtos()),
  };
}

function mapStateToProps(state) {
  return {
    produtos: state.produtos,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(EncomendarPage);
