import { API, RequestOptions } from 'api';
import { alertPush } from 'modules/public/alert';
import { call, put } from 'redux-saga/effects';
import { CreateBankDeposit, createBankDepositData, updateBankDepositCreation } from '../actions/bankDepositActions';
import { BankDeposit } from '../types';

const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'bank', headers: { 'X-CSRF-Token': csrfToken } };
};

interface CreateBankDepositResponse {
	status: string;
	message: string;
	data: BankDeposit;
}

export function* createBankDepositSaga(action: CreateBankDeposit) {
	try {
		yield put(
			createBankDepositData({
				loading: true,
			}),
		);
		const result: CreateBankDepositResponse = yield call(API.post(createOptions()), `/deposit`, action.payload);

		yield put(updateBankDepositCreation({ ...result.data }));

		yield put(alertPush({ message: ['Create Bank Deposit Successfully'], type: 'success' }));
	} catch (error) {
		yield put(alertPush({ message: [error.message], type: 'error' }));
	}
	yield put(
		createBankDepositData({
			loading: false,
		}),
	);
}
