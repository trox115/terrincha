function clienteReducer(state = [], action) {
  const INITIAL_STATE = [];
  switch (action.type) {
    case 'CLIENTE_CRIADO':
      return [action.cliente.user];
    case 'ADD_CASA_TO_USER':
      console.log('hey');
      return [...state, action.casa];
    case 'DELETE_SESSION':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default clienteReducer;
