import React from 'react';
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

function EntregaEmCasa({ ...props }) {
  return (
    <div>
      <h1>I'm the PLACEHOLDER component</h1>
    </div>
  );
}

export default EntregaEmCasa;
