import {
	bankAccountListFetch,
	DeleteBankAccount,
	deleteBankAccountData,
} from 'modules/plugins/fiat/bank/actions/bankAccountActions';
import { API, RequestOptions } from 'api';
import { call, put } from 'redux-saga/effects';
import { alertPush } from 'modules/public/alert';

const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'bank', headers: { 'X-CSRF-Token': csrfToken } };
};

export function* deleteBankAccountSaga(action: DeleteBankAccount) {
	try {
		yield put(
			deleteBankAccountData({
				loading: true,
			}),
		);
		const { otp } = action.payload;
		console.log('action.payload: ', action.payload);
		yield call(API.delete(createOptions()), `/delete?otp=${otp}`, { account_number: action.payload.account_number });

		yield put(bankAccountListFetch());
		yield put(alertPush({ message: ['Delete Bank Account Successfully'], type: 'success' }));
	} catch (error) {
		console.log('ERROR', error);

		yield put(alertPush({ message: [error.message], type: 'error' }));
	}
	yield put(
		deleteBankAccountData({
			loading: false,
		}),
	);
}
