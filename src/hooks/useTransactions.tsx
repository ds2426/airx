import { useCallback, useMemo } from 'react';
import {
  selectTransactions,
  selectStatus,
  fetchTransactions,
  deleteTransaction,
  updateTransaction,
} from '../store/slices/transaction.slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { IUseTransactions } from '../types/IUseTransactions';
import { Transaction } from '../types/Transaction';

export const useTransactions = (): IUseTransactions => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactions);
  const status = useAppSelector(selectStatus);

  const getTransactions = useCallback(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const modifyTransaction = useCallback(
    (row: Transaction) => {
      dispatch(updateTransaction(row));
    },
    [dispatch],
  );

  const removeTransaction = useCallback(
    (id: string) => {
      dispatch(deleteTransaction(id));
    },
    [dispatch],
  );

  return useMemo(
    () => ({
      getTransactions,
      removeTransaction,
      modifyTransaction,
      transactions,
      status,
    }),
    [getTransactions, removeTransaction, modifyTransaction, transactions, status],
  );
};
