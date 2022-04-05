import { bankAccountListFetch } from 'modules/plugins/fiat/bank/actions';
import { CreateBankAccount, createBankAccountData } from './../actions';
import { API, RequestOptions } from 'api';
import { call, put } from 'redux-saga/effects';
import { alertPush } from 'modules/public/alert';

const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'bank', headers: { 'X-CSRF-Token': csrfToken } };
};

export function* createBankAccountSaga(action: CreateBankAccount) {
	try {
		yield put(
			createBankAccountData({
				loading: true,
			}),
		);
		const { otp } = action.payload;
		yield call(API.post(createOptions()), `/create?otp=${otp}`, action.payload);

		yield put(bankAccountListFetch());
		yield put(alertPush({ message: ['Create Bank Account Successfully'], type: 'success' }));
	} catch (error) {
		console.log('ERROR', error);

		yield put(alertPush({ message: [error.message], type: 'error' }));
	}
	yield put(
		createBankAccountData({
			loading: false,
		}),
	);
}
