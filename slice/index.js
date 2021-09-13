import quizzesReducer from './quizzes';
import userReducer from './user';
import tasksReducer from './tasks';
import {persistStore, persistReducer} from 'redux-persist';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  whitelist: ['user'],
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: userReducer,
  tasks: tasksReducer,
  quizzes: quizzesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [];

if (__DEV__) middlewares.push(logger);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares),
);

export let persistor = persistStore(store);
