function CartReducer(state = [], action) {
  switch (action.type) {
    case 'INSERT_CART':
      return [...state, ...action.compra];

    default:
      return state;
  }
}

export default CartReducer;
