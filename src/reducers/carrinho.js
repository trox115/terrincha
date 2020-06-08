function CartReducer(state = [], action) {
  const INITIAL_STATE = [];
  switch (action.type) {
    case 'INSERT_CART':
      return [...state, ...action.compra];
    case 'DELETE_SESSION':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default CartReducer;
