function CartReducer(state = [], action) {
  const INITIAL_STATE = [];
  switch (action.type) {
    case 'INSERT_CART':
      return [...state, ...action.compra];
    case 'ENCOMENDA_CRIADA':
      return INITIAL_STATE;
    case 'DELETE_SESSION':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default CartReducer;
