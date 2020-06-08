function ProdutosReducer(state = [], action) {
  const INITIAL_STATE = [];
  switch (action.type) {
    case 'CREATE_PRODUTOS':
      return [...state, ...action.produto];
    case 'DELETE_SESSION':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default ProdutosReducer;
