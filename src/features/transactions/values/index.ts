import { TransactionFormType } from '../types';

export const DEFAULT_TRANSACTION_FORM_VALUES: TransactionFormType = {
  name: '',
  date: new Date(),
  value: 0,
  paymentType: 'pix',
  categoryId: '0',
};

export const PAYMENT_METHODS = [
  {
    name: 'Pix',
    value: 'pix',
  },
  {
    name: 'Cartão de crédito',
    value: 'credit-card',
  },
  {
    name: 'Cartão de débito',
    value: 'debit-card',
  },
];
