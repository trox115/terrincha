function ProdutosReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_PRODUTOS':
      return [...state, ...action.barber];

    default:
      return state;
  }
}

export default ProdutosReducer;
