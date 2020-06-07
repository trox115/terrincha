import { combineReducers } from 'redux';
import produtos from './produtos';
import carrinho from './carrinho';
import casas from './casas';

const rootReducer = combineReducers({
  produtos,
  carrinho,
  casas,
});

export default rootReducer;
