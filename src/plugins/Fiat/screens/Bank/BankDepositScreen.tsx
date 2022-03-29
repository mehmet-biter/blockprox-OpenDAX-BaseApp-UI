import { getPaypalDepositHistory } from 'modules/plugins/fiat/paypal';
import { BankDepositInfo, BankDeposit, BankDepositHistory } from 'plugins/Fiat';
import { BankDepositSummary } from 'plugins/Fiat/components/Bank/BankDepositSummary';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
interface BankDepositScreenProps {
	currency_id: string;
}

export const BankDepositScreen = (props: BankDepositScreenProps) => {
	const { currency_id } = props;
	// dispatch
	const dispatch = useDispatch();

	// history
	const history = useHistory();

	const dispatchFetchBankDepositHistory = React.useCallback(
		() => dispatch(getPaypalDepositHistory({ currency_id: currency_id })),
		[dispatch],
	);

	useEffect(() => {
		dispatchFetchBankDepositHistory();
	}, []);

	return (
		<div className="container-fluid mt-3" id="deposit-screen">
			<div className="d-flex flex-wrap deposit-container">
				<div className="col-md-6 p-0 d-flex flex-column justify-content-evenly">
					<BankDepositInfo currency_id={currency_id} />
					<BankDepositSummary currency_id={currency_id} />
				</div>
				<div className="col-md-6 p-0 deposit-container__address">
					<BankDeposit currency_id={currency_id} />
				</div>
			</div>
			<div className="row mt-5 deposit-history">
				<div className="col-12">
					<BankDepositHistory currency_id={currency_id} />
				</div>
			</div>
			<div style={{ position: 'fixed', top: '10%', left: '2rem' }}>
				<img
					style={{ cursor: 'pointer' }}
					src="https://img.icons8.com/fluent/48/000000/circled-left.png"
					onClick={() => history.push({ pathname: '/wallets' })}
					alt="Back"
				/>
			</div>
		</div>
	);
};
