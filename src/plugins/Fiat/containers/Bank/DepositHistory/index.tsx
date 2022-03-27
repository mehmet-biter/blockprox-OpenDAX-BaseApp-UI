import * as React from 'react';
import { useIntl } from 'react-intl';
// import { useSelector } from 'react-redux';
// import { localeDate } from '../../../../../helpers';
// import { reduce } from 'lodash';
import { BankHistoryTable } from '../HistoryTable';

interface BankDepositHistoryProps {
	currency_id: string;
}
export const BankDepositHistory: React.FC<BankDepositHistoryProps> = (props: BankDepositHistoryProps) => {
	const intl = useIntl();

	const columns = React.useMemo(() => {
		return [
			{
				Header: intl.formatMessage({ id: `page.body.history.deposit.header.date` }),
				accessor: 'date',
			},

			{
				Header: 'Txid Address',
				accessor: 'txid',
			},
			{
				Header: intl.formatMessage({ id: `page.body.history.deposit.header.status` }),
				accessor: 'state',
			},
			{
				Header: intl.formatMessage({ id: `page.body.history.deposit.header.amount` }),
				accessor: 'amount',
			},
		];
	}, [intl]);

	return (
		<div style={{ marginTop: '10px' }}>
			<h2>{intl.formatMessage({ id: `page.body.history.deposit` })}</h2>
			<BankHistoryTable columns={columns} data={[]} />
		</div>
	);
};
