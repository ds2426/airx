import { Transaction } from './Transaction';
import { RequestStatus } from '../utils/enums';

export interface IUseTransactions {
  getTransactions: () => void;
  modifyTransaction: (transaction: Transaction) => void;
  removeTransaction: (id: string) => void;
  transactions: Transaction[];
  status: RequestStatus;
}
