import React from 'react';
import _toNumber from 'lodash/toNumber';
import _toLower from 'lodash/toLower';
import _toUpper from 'lodash/toUpper';
import _find from 'lodash/find';
import _toString from 'lodash/toString';
import { Button, Input, Select } from 'antd';
import { NewModal } from 'components';
import { useHistory } from 'react-router';

interface BankWithdrawProps {
	currency_id: string;
}
export const BankWithdraw = (props: BankWithdrawProps) => {
	const { Option } = Select;
	const history = useHistory();

	const [showWithdrawConfirmationForm, setShowWithdrawConfirmationForm] = React.useState(false);

	const handleCloseWithdrawConfirmationForm = () => {
		setShowWithdrawConfirmationForm(false);
	};

	const handleShowWithdrawConfirmationForm = () => {
		setShowWithdrawConfirmationForm(true);
	};

	const [otpInputValueState, setOtpInputValueState] = React.useState('');

	const onHandleChangeNumeric = e => {
		let value = e.target.value;

		if (!Number(value) && value.length > 0) {
			return;
		}

		setOtpInputValueState(value);
	};

	const [withdrawInputValueState, setWithdrawInputValueState] = React.useState<string>('');

	const onHandleChangeWithdrawInputValueState = e => {
		let value = e.target.value;

		if (!removeCommaInNumber(value) && value.length > 0) {
			return;
		}
		setWithdrawInputValueState(value);
	};

	const nfObject = new Intl.NumberFormat('en-US');

	const removeCommaInNumber = (numberWithComma: string): number => {
		return Number(numberWithComma.split(',').join(''));
	};

	const renderBodyModalWithdrawConfirmationForm = () => {
		return (
			<div className="desktop-bank-withdraw__modal-form d-flex flex-column align-items-center">
				<span style={{ fontWeight: 600, fontSize: 14, color: '#fff' }}>You will get</span>
				<div className="row align-items-center">
					<span className="mr-1" style={{ fontWeight: 700, fontSize: 36, color: '#fff' }}>
						90
					</span>
					<span style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>EUR</span>
				</div>
				<div className="desktop-bank-withdraw__modal-form__inform-container">
					<div className="d-flex flex-row align-items-center justify-content-between">
						<span>Account Number</span>
						<span>NA2HB12BBB2BBB3V</span>
					</div>
					<div className="d-flex flex-row align-items-center justify-content-between">
						<span>Bank Name</span>
						<span>Groundwork Financial Corp.</span>
					</div>
					<div className="d-flex flex-row align-items-center justify-content-between">
						<span>Fee</span>
						<span>10 EUR</span>
					</div>
					<div className="d-flex flex-row align-items-center justify-content-between">
						<span>Withdrawal Amount</span>
						<span>100 EUR</span>
					</div>
					<div className="d-flex flex-row align-items-center justify-content-between">
						<span>Funds will arrive</span>
						<span>Within 48 hours</span>
					</div>
				</div>
				<span className="desktop-bank-withdraw__modal-form__warning">
					<svg
						className="desktop-bank-withdraw__modal-form__warning__icon"
						width="10"
						height="13"
						viewBox="0 0 7 9"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3.46542 2.87353C3.7502 2.87353 3.98106 3.1423 3.98106 3.47385C3.98106 3.80539 3.7502 4.07416 3.46542 4.07416C3.18064 4.07416 2.94978 3.80539 2.94978 3.47385C2.94978 3.1423 3.18064 2.87353 3.46542 2.87353Z"
							fill="#E9AA09"
						/>
						<path
							d="M3.7062 6.60602H3.24774C3.09601 6.60602 2.97287 6.46137 2.97287 6.28602V4.57976C2.97287 4.40441 3.09712 4.25976 3.24774 4.25976H3.7062C3.85682 4.25976 3.98107 4.40441 3.98107 4.57976V6.28602C3.98107 6.46137 3.85684 6.60602 3.7062 6.60602Z"
							fill="#E9AA09"
						/>
						<path
							d="M3.45332 8.73975C1.55456 8.73975 0.0175171 6.95031 0.0175171 4.73975C0.0175171 2.5292 1.55456 0.739763 3.45332 0.739763C5.35209 0.739763 6.88913 2.5292 6.88913 4.73975C6.88913 6.95031 5.3521 8.73975 3.45332 8.73975ZM3.45663 1.88407C2.1032 1.88407 1.00483 3.16152 1.00483 4.73848C1.00483 6.31544 2.10209 7.59288 3.45663 7.59288C4.81117 7.59288 5.90843 6.31544 5.90843 4.73848C5.90843 3.16151 4.81007 1.88407 3.45663 1.88407Z"
							fill="#E9AA09"
						/>
					</svg>
					Withdrawal usually take under 24 hours. Depends on the speed of your bank. a delay may occur.
				</span>
				<div className="d-flex justify-content-center mt-5">
					<Button
						style={{
							background: 'rgba(233, 170, 9, 1)',
							borderRadius: '50px',
							color: '#000',
							fontWeight: 400,
							fontSize: 12,
							width: 180,
							height: 40,
						}}
						onClick={handleCloseWithdrawConfirmationForm}
					>
						Confirmation
					</Button>
				</div>
			</div>
		);
	};

	return (
		<div className="desktop-bank-withdraw">
			<div className="desktop-bank-withdraw__title">{_toUpper('Withdraw')}</div>
			<div className="desktop-bank-withdraw__select">
				<div className="d-flex flex-row justify-content-between">
					<label className="desktop-bank-withdraw__select__label">Select Bank</label>
					<label
						className="desktop-bank-withdraw__select__settings-label"
						onClick={() => history.push('/profile/bank')}
					>
						Bank accounts settings
					</label>
				</div>
				<Select size="large" defaultValue="techCom" className="desktop-bank-withdraw__select__input">
					<Option value="techCom">TechCom Bank</Option>
					<Option value="vietCom">VietCom Bank</Option>
					<Option value="aareal">Aareal Bank</Option>
				</Select>
				<div className="d-flex flex-row justify-content-end mt-3">
					<span className="desktop-bank-withdraw__select__balance-label">Balance: </span>
					<span className="desktop-bank-withdraw__select__balance-value">0 MNT</span>
				</div>
			</div>
			<div className="desktop-bank-withdraw__input">
				<label>Amount</label>
				<Input
					size="large"
					placeholder="Min amount: 10,000 MNT"
					type="text"
					value={nfObject.format(removeCommaInNumber(withdrawInputValueState!))}
					onChange={onHandleChangeWithdrawInputValueState}
				/>
			</div>
			<div className="desktop-bank-withdraw__input">
				<label>OTP</label>
				<Input size="large" type="text" maxLength={6} onChange={onHandleChangeNumeric} value={otpInputValueState} />
			</div>
			<div className="desktop-bank-withdraw__input">
				<label>You will get</label>
				<Input
					size="large"
					type="text"
					disabled
					value={nfObject.format(
						removeCommaInNumber(withdrawInputValueState!) - removeCommaInNumber(withdrawInputValueState!) * 0.01,
					)}
				/>
			</div>

			<div className="d-flex flex-row justify-content-between">
				<span className="desktop-bank-withdraw__label">Fee: </span>
				<span className="desktop-bank-withdraw__value">1%</span>
			</div>
			<div className="d-flex flex-row justify-content-between">
				<span className="desktop-bank-withdraw__label">Max withdraw</span>
				<span className="desktop-bank-withdraw__value">3,000,000 MNT</span>
			</div>
			<div className="d-flex flex-row justify-content-between">
				<span className="desktop-bank-withdraw__label">Min withdraw</span>
				<span className="desktop-bank-withdraw__value">10,000 MNT</span>
			</div>

			<div className="d-flex justify-content-center mt-5">
				<Button
					style={{
						background: 'rgba(233, 170, 9, 1)',
						borderRadius: '50px',
						color: '#000',
						fontWeight: 400,
						fontSize: 12,
						width: 180,
						height: 40,
					}}
					onClick={handleShowWithdrawConfirmationForm}
				>
					Withdraw
				</Button>
			</div>
			<NewModal
				show={showWithdrawConfirmationForm}
				onHide={handleCloseWithdrawConfirmationForm}
				titleModal="WITHDRAW CONFIRMATION"
				bodyModal={renderBodyModalWithdrawConfirmationForm()}
			/>
		</div>
	);
};
