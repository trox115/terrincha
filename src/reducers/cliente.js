function clienteReducer(state = [], action) {
  switch (action.type) {
    case 'CLIENTE_CRIADO':
      return [action.cliente.user];

    default:
      return state;
  }
}

export default clienteReducer;
