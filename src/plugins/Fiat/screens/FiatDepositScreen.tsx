import React from 'react';
import _toLower from 'lodash/toLower';
import { useParams } from 'react-router';
// import { PaypalDepositScreen } from './Paypal/PaypalDepositScreen';
import { BankDepositScreen } from './Bank/BankDepositScreen';
import { useDispatch } from 'react-redux';
import { currenciesFetch } from 'modules';
import { setDocumentTitle } from 'helpers';
import { useIntl } from 'react-intl';

export const FiatDepositScreen = () => {
	const { currency_id } = useParams<{ currency_id: string }>();

	// dispatch
	const dispatch = useDispatch();

	// intl
	const intl = useIntl();

	setDocumentTitle(intl.formatMessage({ id: 'page.body.wallets.tabs.deposit' }));

	React.useEffect(() => {
		dispatch(currenciesFetch());
	}, []);

	switch (_toLower(currency_id)) {
		case 'paypal':
			return <BankDepositScreen currency_id={_toLower(currency_id)} />;
		// return <PaypalDepositScreen currency_id={_toLower(currency_id)} />;

		default:
			return null;
	}
};
