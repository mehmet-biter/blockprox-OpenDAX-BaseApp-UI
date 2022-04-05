import { takeLatest } from 'redux-saga/effects';
import { BANK_ACCOUNT_LIST_FETCH, CREATE_BANK_ACCOUNT, DELETE_BANK_ACCOUNT } from '../constants';
import { fetchBankAccountListSaga } from './bankAccountList';
import { createBankAccountSaga } from './createBankAccount';
import { deleteBankAccountSaga } from './deleteBankAccount';

export function* rootBankSaga() {
	yield takeLatest(BANK_ACCOUNT_LIST_FETCH, fetchBankAccountListSaga);
	yield takeLatest(CREATE_BANK_ACCOUNT, createBankAccountSaga);
	yield takeLatest(DELETE_BANK_ACCOUNT, deleteBankAccountSaga);
}
