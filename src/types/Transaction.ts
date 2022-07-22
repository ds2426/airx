export type Transaction = {
  id: string;
  rx_number: number;
  prescriber: string;
  prescribed_item: string;
  patient: string;
  dispense_item: string;
  data_entry_on: Date;
  date_written: Date;
  expiration_date: Date;
};
export type TransactionKeys = keyof Transaction;
