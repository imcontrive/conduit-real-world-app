import {createStore,combineReducers} from 'redux';
import reducer from './reducer';
import tags from './tags';

const rootReducers = combineReducers({
  reducer,
  tags,
})
const store = createStore(rootReducers);

export default store;
