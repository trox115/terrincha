function CasaReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_CASA':
      console.log(action);
      return [...state, ...action.casa];

    default:
      return state;
  }
}

export default CasaReducer;
