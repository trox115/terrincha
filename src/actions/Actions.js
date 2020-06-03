import * as produtos from '../Api/ProductOp';

export function produtosSuccess(produto) {
  console.log(produto);
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
