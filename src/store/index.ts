import { combineReducers, configureStore } from '@reduxjs/toolkit';
import animalReducer from './reducers/animal/animalSlice';
import userReducer from './reducers/user/userSlice';

const rootReducer = combineReducers({
  animalReducer,
  userReducer,
});

export const store = configureStore({
  reducer: { rootReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
