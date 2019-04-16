import {createStore,combineReducers} from 'redux';
import reducer from './reducer';
import tags from './tags';
import filterTags from './filterTags';
import userProfile from './userProfile';

const rootReducers = combineReducers({
  reducer,
  tags,
  filterTags,
  userProfile,
})

const store = createStore(rootReducers);

export default store;
