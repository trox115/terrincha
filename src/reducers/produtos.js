function ProdutosReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_PRODUTOS':
      return [...state, ...action.produto];

    default:
      return state;
  }
}

export default ProdutosReducer;
