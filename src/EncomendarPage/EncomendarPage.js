import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function EncomendarPage() {
  return (
    <Container>
      <Row>
        <Col lg="4" md="6" mb="4">
          <div className="card h-100">
            <a href="#">
              <img className="card-img-top" src="/vinho.jpg" alt="" />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Vinho</a>
              </h4>
              <h5>15€</h5>
              <p className="card-text">
                Vinho da quinta da terrincha 2 garrafas!
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Adicionar ao carrinho</button>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" mb="4">
          <div className="card h-100">
            <a href="#">
              <img className="card-img-top" src="/azeite.jpg" alt="" />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Azeite</a>
              </h4>
              <h5>30.00€</h5>
              <p className="card-text">
                Azeite da quinta da terrincha. 5 litors. Selo biológico!
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Adicionar ao carrinho</button>
            </div>
          </div>
        </Col>
        <Col lg="4" md="6" mb="4">
          <div className="card h-100">
            <a href="#">
              <img
                className="card-img-top"
                src="http://placehold.it/700x400"
                alt=""
              />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Mel</a>
              </h4>
              <h5>15€</h5>
              <p className="card-text">
                Mel de folha dee laranjeira da quinta da terrincha!
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Adicionar ao carrinho</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default EncomendarPage;
