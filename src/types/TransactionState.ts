import { Transaction } from './Transaction';
import { RequestStatus } from '../utils/enums';

export type TransactionState = {
  transactions: Transaction[];
  status: RequestStatus;
};
