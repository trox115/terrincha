import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import stop from './1.jpg';
import poco from './3.jpg';
import casa from './4.jpg';

const Full1 = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  img {
    height: 100vh;
  }
`;

function NavegacaoPage({ ...props }) {
  const { casa } = props;
  const { id } = casa;
  let image = '';
  if (id >= 1 && id <= 7) {
    image = '/casas/1a7.png';
  } else if (id >= 9 && id <= 10) {
    image = '/casas/9e10.png';
  } else {
    image = `/casas/${id}.png`;
  }
  return (
    <Full1 id="full-image">
      <img src={image} alt="caminho para a sua casa" />
    </Full1>
  );
}

function mapStateToProps(state) {
  return {
    casa: state.cliente[1],
  };
}

export default connect(mapStateToProps, null)(NavegacaoPage);
