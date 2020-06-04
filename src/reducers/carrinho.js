function CartReducer(state = [], action) {
  switch (action.type) {
    case 'INSERT_CART':
      return [...state, ...action.carrinho];

    default:
      return state;
  }
}

export default CartReducer;
