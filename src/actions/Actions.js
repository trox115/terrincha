import * as produtos from '../Api/ProductOp';

export function produtosSuccess(produto) {
  return { type: 'CREATE_PRODUTOS', produto };
}
export function Produtos() {
  return function unamed2(dispatch) {
    return barbers
      .getBarbers()
      .then(response => {
        dispatch(produtosSuccess(response));
      })
      .catch(error => {
        throw error;
      });
  };
}
