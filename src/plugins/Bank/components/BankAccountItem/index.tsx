import React, { useState } from 'react';
import { BankAccount } from 'modules/plugins/fiat/bank/types';
import { deleteBankAccount } from 'modules/plugins/fiat/bank/actions';
import { getCsrfToken } from 'helpers';
import { useDispatch } from 'react-redux';
import { NewModal } from 'components';
import { Button } from 'react-bootstrap';

interface BankAccountItemProps {
	index: number;
	bankAccountItem: BankAccount;
}

export const BankAccountItem = (props: BankAccountItemProps) => {
	const { index, bankAccountItem } = props;

	// dispatch
	const dispatch = useDispatch();

	const [showDeleteConfirmationForm, setShowDeleteConfirmationForm] = useState(false);

	const handleClosesDeleteConfirmationForm = () => {
		setShowDeleteConfirmationForm(false);
	};
	const handleShowDeleteConfirmationForm = () => {
		setShowDeleteConfirmationForm(true);
	};

	const handleDeleteBankAccount = () => {
		const otp = getCsrfToken();
		if (otp) {
			dispatch(
				deleteBankAccount({
					account_number: bankAccountItem.account_number,
					otp: otp,
				}),
			);
		}
		console.log('bankAccountItem.account_number: ', bankAccountItem.account_number);

		dispatch(
			deleteBankAccount({
				account_number: bankAccountItem.account_number,
				otp: '292129',
			}),
		);
	};

	const renderBodyModalAddBankForm = () => {
		return (
			<form className="desktop-bank-account-list-screen__bank-form">
				<h4 style={{ textAlign: 'center' }}>Do you really want to delete this bank account?</h4>
				<div className="d-flex flex-row justify-content-around mt-5">
					<div>
						<Button
							block={true}
							style={{
								background: 'rgb(var(--rgb-milano-red))',
								borderRadius: '50px',
								color: '#fff',
								fontWeight: 600,
								fontSize: 14,
								padding: '0.5em 3em',
							}}
							variant="primary"
							onClick={() => handleDeleteBankAccount()}
						>
							Remove
						</Button>
					</div>
					<div>
						<Button
							block={true}
							style={{
								background: '#D6DADF',
								border: '1px solid #848E9C',
								borderRadius: '50px',
								color: '#000',
								fontWeight: 600,
								fontSize: 14,
								padding: '0.5em 3em',
							}}
							variant="primary"
							onClick={() => handleClosesDeleteConfirmationForm()}
						>
							Cancel
						</Button>
					</div>
				</div>
			</form>
		);
	};

	return (
		<tr className="desktop-bank-account-list-screen__bank-account-list__bank-account-item" style={{ lineHeight: 5 }}>
			<td>{index}</td>
			<td style={{ textAlign: 'left' }}>{bankAccountItem.account_name}</td>
			<td>{bankAccountItem.account_number}</td>
			<td>{bankAccountItem.bank_name}</td>
			<td>{bankAccountItem.bank_address}</td>
			<td>
				<Button
					className="desktop-bank-account-list-screen__bank-account-list__bank-account-item__remove-btn"
					onClick={handleShowDeleteConfirmationForm}
				>
					Remove
				</Button>
			</td>
			<NewModal
				className="desktop-bank-account-list-screen__new-modal"
				show={showDeleteConfirmationForm}
				onHide={handleClosesDeleteConfirmationForm}
				titleModal="DELETE BANk ACCOUNT CONFIRMATION"
				bodyModal={renderBodyModalAddBankForm()}
			/>
		</tr>
	);
};
