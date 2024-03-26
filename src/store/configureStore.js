// configureStore.js

import { createStore, combineReducers } from 'redux';
import taskReducer from '../reducers/taskReducer';

// Combine reducers
const rootReducer = combineReducers({
  tasks: taskReducer
});

// Configure store
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
