function clienteReducer(state = [], action) {
  const INITIAL_STATE = [];
  switch (action.type) {
    case 'CLIENTE_CRIADO':
      return [action.cliente.user];
    case 'DELETE_SESSION':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default clienteReducer;
