import React from 'react';
import styled from 'styled-components';
import stop from './1.jpg';
import poco from './3.jpg';
import casa from './4.jpg';

const Full1 = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url(${stop});
`;

const Full2 = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url(${poco});
`;

const Full3 = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url(${casa});
`;

function NavegacaoPage({ ...props }) {
  console.log(props);
  const b = document.getElementById('mynav');
  if (b !== null) {
    b.style.display = 'none';
  }
  function handleClick() {
    const a = document.getElementById('full-image');
    a.style.display = 'none';
    const b = document.getElementById('full-image2');
    b.style.display = 'block';
  }

  function handleClick2() {
    const a = document.getElementById('full-image2');
    a.style.display = 'none';
    const b = document.getElementById('full-image3');
    b.style.display = 'block';
  }

  function handleClick3() {
    b.style.display = 'block';
    props.history.goBack();
  }

  return (
    <>
      <Full1 id="full-image">
        <p>Vire à esquerda e avance até ao stop</p>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Seguinte
        </button>
      </Full1>
      <Full2 id="full-image2">
        <p>Vire à direita e avanve até ao poço</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick2}
        >
          Seguinte
        </button>
      </Full2>
      <Full3 id="full-image3">
        <p>Continue em frente, a sua casa é a numero 3</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick3}
        >
          Seguinte
        </button>
      </Full3>
    </>
  );
}

export default NavegacaoPage;
