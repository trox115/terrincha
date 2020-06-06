import * as produtos from '../Api/ProductOp';

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
