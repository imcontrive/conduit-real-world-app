import {createStore,combineReducers} from 'redux';
import reducer from './reducer';
import tags from './tags';
import filterTags from './filterTags'

const rootReducers = combineReducers({
  reducer,
  tags,
  filterTags
})
const store = createStore(rootReducers);

export default store;
