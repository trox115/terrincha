import { combineReducers } from 'redux';
import produtos from './produtos';
import carrinho from './carrinho';
import casas from './casas';
import cliente from './cliente';

const rootReducer = combineReducers({
  produtos,
  carrinho,
  casas,
  cliente,
});

export default rootReducer;
