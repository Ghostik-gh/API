import { combineReducers, configureStore } from '@reduxjs/toolkit';
import animalReducer from './reducers/animal/animalSlice';

const rootReducer = combineReducers({
  animalReducer,
});

export const store = configureStore({
  reducer: { rootReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
