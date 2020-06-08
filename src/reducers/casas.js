function CasaReducer(state = [], action) {
  const INITIAL_STATE = [];
  switch (action.type) {
    case 'CREATE_CASA':
      return [...state, ...action.casa];
    case 'DELETE_SESSION':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default CasaReducer;
