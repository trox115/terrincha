function ProdutosReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_PRODUTOS':
      console.log(action);
      return [...state, ...action.produto];

    default:
      return state;
  }
}

export default ProdutosReducer;
