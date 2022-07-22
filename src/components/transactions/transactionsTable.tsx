import { FC, useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import MaterialReactTable, { MRT_ColumnDef, MRT_Row } from 'material-react-table';
import type {
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from '@tanstack/react-table';
import { Transaction } from '../../types/Transaction';
import { useTransactions } from '../../hooks/useTransactions';
import { RequestStatus } from '../../utils/enums';
import React from 'react';

const TransactionsTable: FC = () => {
  const { getTransactions, modifyTransaction, transactions, status } = useTransactions();
  const [data, setData] = useState<Transaction[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [rowCount, setRowCount] = useState(0);

  const columns = useMemo(
    () =>
      [
        { header: 'ID', accessorKey: 'id' },
        {
          header: 'Rx Number',
          accessorKey: 'rx_number',
          muiTableBodyCellProps: {
            align: 'right',
          },
        },
        { header: 'Prescriber', accessorKey: 'prescriber' },
        { header: 'Prescribed Item', accessorKey: 'prescribed_item' },
        { header: 'Patient', accessorKey: 'patient' },
        { header: 'Dispensed Item', accessorKey: 'dispense_item' },
        {
          header: 'Data Entry On', //custom header markup
          accessorKey: 'data_entry_on',
          Cell: ({ cell }) => (
            <>{format(new Date(cell.getValue()), 'MM/dd/yyyy hh:mm:ss')}</>
          ),
        },
        {
          header: 'Date Written',
          accessorKey: 'date_written',
          Cell: ({ cell }) => (
            <>{format(new Date(cell.getValue()), 'MM/dd/yyyy hh:mm:ss')}</>
          ),
        },
        {
          header: 'Expiration Date',
          accessorKey: 'expiration_date',
          Cell: ({ cell }) => (
            <>{format(new Date(cell.getValue()), 'MM/dd/yyyy hh:mm:ss')}</>
          ),
        },
      ] as MRT_ColumnDef<Transaction>[],
    [],
  );

  useEffect(() => {
    if (
      status !== RequestStatus.LOADING &&
      status !== RequestStatus.FAILED &&
      status !== RequestStatus.SUCCEEDED
    ) {
      getTransactions();
    }
    if (status === RequestStatus.FAILED) {
      setIsError(false);
    }
    if (status === RequestStatus.LOADING) {
      setIsLoading(false);
    }
    if (status === RequestStatus.SUCCEEDED && transactions.length > 0) {
      setData(transactions);
      setRowCount(transactions.length);
    }
  }, [getTransactions, modifyTransaction, transactions, status]);

  const handleSaveRow = ({ row }: { row: MRT_Row<Transaction> }) => {
    row._valuesCache && modifyTransaction(row._valuesCache);
  };

  return (
    <MaterialReactTable
      muiTableHeadCellProps={{
        sx: {
          backgroundColor: '#5867b0',
          borderRight: '1px solid rgba(224,224,224,1)',
          color: '#fff',
        },
      }}
      columns={columns}
      data={data}
      initialState={{ showColumnFilters: false }}
      enableFilters
      enablePagination
      enableSorting
      enableHiding
      enableTableHead
      enableTableFooter
      enableStickyHeader
      muiTableToolbarAlertBannerProps={
        isError
          ? {
              color: 'error',
              children: 'Error loading data',
            }
          : undefined
      }
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={setGlobalFilter}
      onPaginationChange={setPagination}
      onSortingChange={setSorting}
      rowCount={rowCount}
      enableEditing
      onEditRowSubmit={handleSaveRow}
      state={{
        columnFilters,
        globalFilter,
        isLoading,
        pagination,
        showAlertBanner: isError,
        showProgressBars: false,
        sorting,
      }}
    />
  );
};

export default TransactionsTable;
