import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import * as productActions from '../../actions/Actions';
import Modal from '../modal/Modal';
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
  const [modal, setModal] = useState({
    opened: false,
    produto: { nome: '', preco: 0 },
  });

  useEffect(() => {
    if (produtos.length <= 0) {
      loadProdutos();
    }
  }, [produtos, loadProdutos]);
  let allProdutos = [];

  function handleClick(event) {
    const idProduto = parseInt(event.target.id, 10);
    const index = produtos.findIndex(x => x.id === idProduto);

    setModal({
      opened: true,
      produto: produtos[index],
    });
    const pop = document.getElementById('myModal');
    pop.style.display = 'block';
    const span = document.getElementsByClassName('close')[1];
    span.onclick = function unamed() {
      pop.style.display = 'none';
    };
  }

  allProdutos = produtos.map(produto => (
    <Col md="6" key={produto.id}>
      <Produtos>
        <ImagePlaceholder>
          <img src={`/vinhos/${produto.imagem}`} alt="icone-navegacao" />
        </ImagePlaceholder>
        <div>
          <h1 className="titulo">{produto.nome}</h1>
          <h2 className="designacao">{produto.descricao}</h2>
          <span>{produto.ano}</span><span className="preco">{`${produto.preco}€`}</span>
          <PrecoCompra>
            
            <Compra onClick={handleClick} id={produto.id}>
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
          <Modal produto={modal.produto} />
          <InfoHeader>
            <h1>Produtos da Quinta</h1>
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
