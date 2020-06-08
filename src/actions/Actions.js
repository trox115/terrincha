import * as produtos from '../Api/ProductOp';
import * as clientes from '../Api/criarCliente';

export function produtosSuccess(produto) {
  return { type: 'CREATE_PRODUTOS', produto };
}
export function Produtos() {
  return function unamed2(dispatch) {
    return produtos
      .getProdutos()
      .then(response => {
        dispatch(produtosSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function carrinhoSuccess(compra) {
  return { type: 'INSERT_CART', compra };
}

export function casasSuccess(casa) {
  return { type: 'CREATE_CASA', casa };
}

export function Casas() {
  return function unamed2(dispatch) {
    return produtos
      .getCasas()
      .then(response => {
        dispatch(casasSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function clienteSuccess(cliente) {
  return { type: 'CLIENTE_CRIADO', cliente };
}

export function Client(form) {
  return function unamed2(dispatch) {
    return clientes
      .registoCli(form)
      .then(response => {
        dispatch(clienteSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function EncomendaSuccess() {
  return { type: 'ENCOMENDA_CRIADA' };
}

export function deleteSe(response) {
  return { type: 'DELETE_SESSION', response };
}

export function logout() {
  return function unamed(dispatch) {
    return clientes
      .deleteSession()
      .then(response => {
        dispatch(deleteSe(response));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addCasaUser(casa) {
  return { type: 'ADD_CASA_TO_USER', casa };
}

export function adicionarCasa(casa) {
  return function unamed(dispatch) {
    dispatch(addCasaUser(casa));
  };
}
