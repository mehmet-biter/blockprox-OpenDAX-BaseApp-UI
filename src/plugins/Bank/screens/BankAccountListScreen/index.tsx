import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BankAccountList } from 'plugins/Bank/containers';
import { NewCustomInput, NewModal } from 'components';
import { Checkbox } from 'antd';

export const BankAccountListScreen = () => {
	const [showAddBankAccountForm, setShowAddBankAccountForm] = useState(false);

	const handleCloseAddBankAccountForm = () => {
		setShowAddBankAccountForm(false);
	};
	const handleShowAddBankAccountForm = () => {
		setShowAddBankAccountForm(true);
	};

	const [bankForm, setBankForm] = React.useState({
		accountName: '',
		bankName: '',
		bankAddress: '',
		bankAccountNumber: '',
		iFSCCode: '',
		otpCode: '',
	});

	const handleFieldBankForm = (field: string, value: string) => {
		setBankForm(prev => ({
			...prev,
			[field]: value,
		}));
	};

	const renderBodyModalAddBankForm = () => {
		return (
			<form className="desktop-bank-account-list-screen__bank-form">
				<div className="desktop-bank-account-list-screen__bank-form__input">
					<label>Name of Account</label>
					<div style={{ marginBottom: 3 }}>
						<NewCustomInput
							type="text"
							label="Name of Account"
							placeholder=""
							defaultLabel="Name of Account"
							handleFocusInput={() => {}}
							handleChangeInput={value => {
								handleFieldBankForm('accountName', value);
							}}
							inputValue={bankForm.accountName}
							classNameLabel="d-none"
							classNameInput="td-email-form__input"
							autoFocus={true}
						/>
					</div>
					<span className="desktop-bank-account-list-screen__bank-form__input__warning">
						<svg
							className="desktop-bank-account-list-screen__bank-form__input__warning__icon"
							width="10"
							height="13"
							viewBox="0 0 7 9"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M3.46542 2.87353C3.7502 2.87353 3.98106 3.1423 3.98106 3.47385C3.98106 3.80539 3.7502 4.07416 3.46542 4.07416C3.18064 4.07416 2.94978 3.80539 2.94978 3.47385C2.94978 3.1423 3.18064 2.87353 3.46542 2.87353Z"
								fill="#E5E5E5"
							/>
							<path
								d="M3.7062 6.60602H3.24774C3.09601 6.60602 2.97287 6.46137 2.97287 6.28602V4.57976C2.97287 4.40441 3.09712 4.25976 3.24774 4.25976H3.7062C3.85682 4.25976 3.98107 4.40441 3.98107 4.57976V6.28602C3.98107 6.46137 3.85684 6.60602 3.7062 6.60602Z"
								fill="#E5E5E5"
							/>
							<path
								d="M3.45332 8.73975C1.55456 8.73975 0.0175171 6.95031 0.0175171 4.73975C0.0175171 2.5292 1.55456 0.739763 3.45332 0.739763C5.35209 0.739763 6.88913 2.5292 6.88913 4.73975C6.88913 6.95031 5.3521 8.73975 3.45332 8.73975ZM3.45663 1.88407C2.1032 1.88407 1.00483 3.16152 1.00483 4.73848C1.00483 6.31544 2.10209 7.59288 3.45663 7.59288C4.81117 7.59288 5.90843 6.31544 5.90843 4.73848C5.90843 3.16151 4.81007 1.88407 3.45663 1.88407Z"
								fill="#E5E5E5"
							/>
						</svg>
						Recipient name must be the same as recorded on our platform. Please contact{' '}
						{
							<span className="desktop-bank-account-list-screen__bank-form__input__warning__highlight">
								administrator support
							</span>
						}{' '}
						for any issues.
					</span>
				</div>

				<div className="desktop-bank-account-list-screen__bank-form__input">
					<label>Bank Name</label>
					<div>
						<NewCustomInput
							type="text"
							label="Bank Name"
							placeholder=""
							defaultLabel="Bank Name"
							handleFocusInput={() => {}}
							handleChangeInput={value => {
								handleFieldBankForm('bankName', value);
							}}
							inputValue={bankForm.bankName}
							classNameLabel="d-none"
							classNameInput="td-email-form__input"
						/>
					</div>
				</div>
				<div className="desktop-bank-account-list-screen__bank-form__input">
					<label>Bank Address</label>
					<div>
						<NewCustomInput
							type="text"
							label="Bank Address"
							placeholder=""
							defaultLabel="Bank Address"
							handleFocusInput={() => {}}
							handleChangeInput={value => {
								handleFieldBankForm('bankAddress', value);
							}}
							inputValue={bankForm.bankAddress}
							classNameLabel="d-none"
							classNameInput="td-email-form__input"
						/>
					</div>
				</div>
				<div className="desktop-bank-account-list-screen__bank-form__input">
					<label>Bank Account Number</label>
					<div>
						<NewCustomInput
							type="text"
							label="Bank Account Number"
							placeholder=""
							defaultLabel="Bank Account Number"
							handleFocusInput={() => {}}
							handleChangeInput={value => {
								handleFieldBankForm('bankAccountNumber', value);
							}}
							inputValue={bankForm.bankAccountNumber}
							classNameLabel="d-none"
							classNameInput="td-email-form__input"
						/>
					</div>
				</div>

				<div className="desktop-bank-account-list-screen__bank-form__input">
					<label>IFSC Code</label>
					<div>
						<NewCustomInput
							type="text"
							label="IFSC Code"
							placeholder=""
							defaultLabel="IFSC Code"
							handleFocusInput={() => {}}
							handleChangeInput={value => {
								handleFieldBankForm('iFSCCode', value);
							}}
							inputValue={bankForm.iFSCCode}
							classNameLabel="d-none"
							classNameInput="td-email-form__input"
						/>
					</div>
				</div>
				<div className="desktop-bank-account-list-screen__bank-form__input">
					<label>OTP Code</label>
					<div>
						<NewCustomInput
							type="text"
							label="OTP Code"
							placeholder=""
							defaultLabel="OTP Code"
							handleFocusInput={() => {}}
							handleChangeInput={value => {
								handleFieldBankForm('otpCode', value);
							}}
							inputValue={bankForm.otpCode}
							classNameLabel="d-none"
							classNameInput="td-email-form__input"
						/>
					</div>
				</div>
				<Checkbox className="desktop-bank-account-list-screen__bank-form__check-box">
					Save for next time deposit.
				</Checkbox>

				<div className="d-flex justify-content-center mt-4">
					<Button
						block={true}
						style={{
							background: '#FFB800',
							border: '1px solid #848E9C',
							borderRadius: '50px',
							color: '#000',
							fontWeight: 600,
							fontSize: 14,
						}}
						className="w-50"
						size="lg"
						variant="primary"
					>
						Confirm
					</Button>
				</div>
			</form>
		);
	};

	return (
		<div className="desktop-bank-account-list-screen">
			<div className="desktop-bank-account-list-screen__header">
				<h1 className="desktop-bank-account-list-screen__header__title">Bank Account</h1>
				<Button className="desktop-bank-account-list-screen__header__add-bank-btn" onClick={handleShowAddBankAccountForm}>
					Add Bank Account
				</Button>
			</div>
			<BankAccountList />
			<NewModal
				className="desktop-bank-account-list-screen__new-modal"
				show={showAddBankAccountForm}
				onHide={handleCloseAddBankAccountForm}
				titleModal="BANK INFORMATION"
				bodyModal={renderBodyModalAddBankForm()}
			/>
		</div>
	);
};
