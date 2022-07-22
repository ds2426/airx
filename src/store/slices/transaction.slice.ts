import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '..';
import request from '../../utils/request';
import { RequestStatus } from '../../utils/enums';
import { Transaction } from '../../types/Transaction';
import { TransactionState } from '../../types/TransactionState';

// Transactions State
const initialState: TransactionState = {
  transactions: [],
  status: RequestStatus.IDLE,
};

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchTransactions',
  async () => {
    const response = await request.get<Transaction[]>('transactions');
    return response;
  },
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id: string) => {
    const response = await request.delete<string>(`transactions/${id}`);
    return response;
  },
);

export const updateTransaction = createAsyncThunk(
  'transaction/updateTransaction',
  async (transaction: Transaction) => {
    const { id, ...info } = transaction;
    const response = await request.put<string, Transaction>(
      `transactions/${id}`,
      JSON.stringify(info),
    );
    return response;
  },
);

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (_state) => {
        const state = _state;
        state.status = RequestStatus.LOADING;
      })
      .addCase(fetchTransactions.fulfilled, (_state, action) => {
        const state = _state;
        state.status = RequestStatus.SUCCEEDED;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (_state) => {
        const state = _state;
        state.status = RequestStatus.FAILED;
      })
      .addCase(deleteTransaction.pending, (_state) => {
        const state = _state;
        state.status = RequestStatus.LOADING;
      })
      .addCase(deleteTransaction.fulfilled, (_state, action) => {
        const state = _state;
        state.status = RequestStatus.SUCCEEDED;
        state.transactions = state.transactions.filter(
          (t: Transaction) => t.id !== action.meta.arg,
        );
      })
      .addCase(deleteTransaction.rejected, (_state) => {
        const state = _state;
        state.status = RequestStatus.FAILED;
      })
      .addCase(updateTransaction.pending, (_state) => {
        const state = _state;
        state.status = RequestStatus.LOADING;
      })
      .addCase(updateTransaction.fulfilled, (_state, action) => {
        const state = _state;
        state.status = RequestStatus.SUCCEEDED;
        state.transactions = state.transactions.map((t: Transaction) =>
          t.id !== action.meta.arg.id ? t : { ...t, ...action.meta.arg },
        );
      })
      .addCase(updateTransaction.rejected, (_state) => {
        const state = _state;
        state.status = RequestStatus.FAILED;
      });
  },
});

export const selectTransactions = (state: RootState): Transaction[] =>
  state.transactions.transactions;
export const selectStatus = (state: RootState) => state.transactions.status;

export default transactionSlice.reducer;
