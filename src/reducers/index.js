import { combineReducers } from 'redux';
import produtos from './produtos';
import carrinho from './carrinho';

const rootReducer = combineReducers({
  produtos,
  carrinho,
});

export default rootReducer;
