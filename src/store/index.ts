import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import transactionReducer from './slices/transaction.slice';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
