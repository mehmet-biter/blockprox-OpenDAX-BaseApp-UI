import { API, RequestOptions } from 'api';
import { alertPush } from 'modules/public/alert';
import { call, put } from 'redux-saga/effects';
import { CreateBankWithdraw, createBankWithdrawData, updateBankWithdrawCreation } from '../actions/bankWithdrawActions';
import { BankWithdraw } from '../types';

const createOptions = (csrfToken?: string): RequestOptions => {
	return { apiVersion: 'bank', headers: { 'X-CSRF-Token': csrfToken } };
};

interface CreateBankWithdrawResponse {
	status: string;
	message: string;
	data: BankWithdraw;
}

export function* createBankWithdrawSaga(action: CreateBankWithdraw) {
	try {
		yield put(
			createBankWithdrawData({
				loading: true,
			}),
		);
		const { otp } = action.payload;

		const result: CreateBankWithdrawResponse = yield call(API.post(createOptions()), `/withdraw?otp=${otp}`, action.payload);

		yield put(updateBankWithdrawCreation({ ...result.data }));

		yield put(alertPush({ message: ['Create Bank Withdraw Successfully'], type: 'success' }));
	} catch (error) {
		yield put(alertPush({ message: [error.message], type: 'error' }));
	}
	yield put(
		createBankWithdrawData({
			loading: false,
		}),
	);
}
