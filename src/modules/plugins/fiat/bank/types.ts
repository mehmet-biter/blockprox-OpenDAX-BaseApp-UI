import { CommonState } from '../../../../modules/types';

export enum BankType {
	Bank = 'bank',
}

export interface BankAccount {
	id: number;
	uid: string;
	ifsc_code: string;
	bank_name: string;
	bank_address: string;
	account_name: string;
	account_number: string;
	created_at: Date;
	updated_at: Date;
}

export interface BankAccountListState extends CommonState {
	payload: BankAccount[];
	loading: boolean;
}

export interface CreateBankAccountState extends CommonState {
	loading: boolean;
}

export interface DeleteBankAccountState extends CommonState {
	loading: boolean;
}
