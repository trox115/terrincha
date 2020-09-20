import React,{useState} from 'react';
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
import Entrega from '../../assets/img/2.png';
import Carrinho from '../../assets/icones/5.png';

function EntregaEmCasa({ ...props }) {
	const [modal, setModal] = useState({
    opened: false,
    produto: { nome: '', preco: 0 },
  });
  return (
    <GiveMargin>
      <Container>
        <Row>
          <Modal produto={modal.produto} />
          <InfoHeader>
            <h1>Entrega em Casa</h1>
            <img src={Entrega} alt="icone de entrega" />
          </InfoHeader>


        </Row>
      </Container>
    </GiveMargin>
  );
}

function mapStateToProps(){
	
}

export default EntregaEmCasa;
