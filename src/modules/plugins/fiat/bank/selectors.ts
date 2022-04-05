import { RootState } from '../../../index';

export const selectCreateBankAccountLoading = (state: RootState) => state.plugins.bank.createBankAccount.loading;

export const selectBankAccountList = (state: RootState) => state.plugins.bank.bankAccountList.payload;
export const selectBankAccountListLoading = (state: RootState) => state.plugins.bank.bankAccountList.loading;

export const selectDeleteBankAccount = (state: RootState) => state.plugins.bank.deleteBankAccount.loading;
