function CartReducer(state = [], action) {
  switch (action.type) {
    case 'INSERT_CART':
      console.log(action.compra);
      return [...state, ...action.compra];

    default:
      return state;
  }
}

export default CartReducer;
