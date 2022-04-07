import React from 'react';
import _toNumber from 'lodash/toNumber';
import _toLower from 'lodash/toLower';
import _toUpper from 'lodash/toUpper';
import _find from 'lodash/find';
import _toString from 'lodash/toString';
import { Button, Input, Select } from 'antd';
import { NewModal } from 'components';
import { useHistory } from 'react-router';
import { formatNumber } from 'helpers';
import NoticeIcon from 'assets/icons/notice.svg';

interface BankDepositScreenProps {
	currency_id: string;
}

export const BankWithdrawScreen = (props: BankDepositScreenProps) => {
	const { Option } = Select;
	const { currency_id } = props;

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

		const indexOfDot: number = removeCommaInNumber(value).indexOf('.');

		if ((isNaN(Number(removeCommaInNumber(value))) && value.length > 0) || indexOfDot === 0) {
			return;
		}

		setWithdrawInputValueState(value);
	};

	const removeCommaInNumber = (numberWithComma: string): string => {
		return numberWithComma.split(',').join('');
	};

	const renderBodyModalWithdrawConfirmationForm = () => {
		return (
			<div className="td-mobile-wallet-fiat-bank-withdraw__modal-form d-flex flex-column align-items-center">
				<span style={{ fontWeight: 600, fontSize: 14, color: '#fff' }}>You will get</span>
				<div className="row align-items-center">
					<span className="mr-1" style={{ fontWeight: 700, fontSize: '2rem', color: '#fff' }}>
						90
					</span>
					<span style={{ fontWeight: 400, fontSize: 16, color: '#fff' }}>{_toUpper(currency_id)}</span>
				</div>
				<div className="td-mobile-wallet-fiat-bank-withdraw__modal-form__inform-container">
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
						<span>10 {_toUpper(currency_id)}</span>
					</div>
					<div className="d-flex flex-row align-items-center justify-content-between">
						<span>Withdrawal Amount</span>
						<span>100 {_toUpper(currency_id)}</span>
					</div>
					<div className="d-flex flex-row align-items-center justify-content-between">
						<span>Funds will arrive</span>
						<span>Within 48 hours</span>
					</div>
				</div>
				<span className="td-mobile-wallet-fiat-bank-withdraw__modal-form__warning">
					<img src={NoticeIcon} className="td-mobile-wallet-fiat-bank-withdraw__modal-form__warning__icon" />
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
							width: '12rem',
							height: '3.1rem',
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
		<div className="td-mobile-wallet-fiat-bank-withdraw">
			<div className="td-mobile-wallet-fiat-bank-withdraw__select">
				<div className="d-flex flex-row justify-content-between">
					<label className="td-mobile-wallet-fiat-bank-withdraw__select__label">Select Bank</label>
					<label
						className="td-mobile-wallet-fiat-bank-withdraw__select__settings-label"
						onClick={() => history.push('/profile/bank')}
					>
						Bank accounts settings
					</label>
				</div>
				<Select size="large" defaultValue="techCom" className="td-mobile-wallet-fiat-bank-withdraw__select__input">
					<Option value="techCom">TechCom Bank - Account: 123-4-567-8910-1-1</Option>
					<Option value="vietCom">VietCom Bank - Account: 876-8-325-6513-3-3</Option>
					<Option value="aareal">Aareal Bank - Account: 993-2-389-7125-2-6</Option>
				</Select>
				<div className="d-flex flex-row justify-content-end mt-3">
					<span className="td-mobile-wallet-fiat-bank-withdraw__select__balance-label">Balance: </span>
					<span className="td-mobile-wallet-fiat-bank-withdraw__select__balance-value">0 {_toUpper(currency_id)}</span>
				</div>
			</div>
			<div className="td-mobile-wallet-fiat-bank-withdraw__input">
				<label>Amount</label>
				<Input
					size="large"
					placeholder={`Min amount: 10,000 ${_toUpper(currency_id)}`}
					type="text"
					value={formatNumber(removeCommaInNumber(withdrawInputValueState!))}
					onChange={onHandleChangeWithdrawInputValueState}
				/>
			</div>
			<div className="td-mobile-wallet-fiat-bank-withdraw__input">
				<label>OTP</label>
				<Input size="large" type="text" maxLength={6} onChange={onHandleChangeNumeric} value={otpInputValueState} />
			</div>

			<div className="d-flex flex-row justify-content-between">
				<span className="td-mobile-wallet-fiat-bank-withdraw__label">You will get: </span>
				<span className="td-mobile-wallet-fiat-bank-withdraw__value">
					{formatNumber(
						(
							Number(removeCommaInNumber(withdrawInputValueState!)) -
							Number(removeCommaInNumber(withdrawInputValueState!)) * 0.01
						).toString(),
					)}{' '}
					{_toUpper(currency_id)}
				</span>
			</div>

			<div className="d-flex flex-row justify-content-between">
				<span className="td-mobile-wallet-fiat-bank-withdraw__label">Fee: </span>
				<span className="td-mobile-wallet-fiat-bank-withdraw__value">1 %</span>
			</div>
			<div className="d-flex flex-row justify-content-between">
				<span className="td-mobile-wallet-fiat-bank-withdraw__label">Max withdraw</span>
				<span className="td-mobile-wallet-fiat-bank-withdraw__value">3,000,000 {_toUpper(currency_id)}</span>
			</div>
			<div className="d-flex flex-row justify-content-between">
				<span className="td-mobile-wallet-fiat-bank-withdraw__label">Min withdraw</span>
				<span className="td-mobile-wallet-fiat-bank-withdraw__value">10,000 {_toUpper(currency_id)}</span>
			</div>

			<div className="d-flex justify-content-center mt-5">
				<Button
					style={{
						background: 'var(--yellow)',
						borderRadius: '50px',
						color: '#000',
						fontWeight: 400,
						fontSize: 12,
						width: '12rem',
						height: '3.1rem',
					}}
					onClick={handleShowWithdrawConfirmationForm}
				>
					Withdraw
				</Button>
			</div>
			<NewModal
				show={showWithdrawConfirmationForm}
				onHide={handleCloseWithdrawConfirmationForm}
				titleModal="WITHRAW CONFIRMATION"
				bodyModal={renderBodyModalWithdrawConfirmationForm()}
			/>
		</div>
	);
};
