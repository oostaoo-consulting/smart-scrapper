// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import dataReducer from './features/data-slice';

const store = configureStore({
  reducer: {
    dataReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use the "useAppSelector" instead of "useSelector" function
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
