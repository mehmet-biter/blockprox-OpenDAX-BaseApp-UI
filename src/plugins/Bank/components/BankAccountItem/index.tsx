import React from 'react';
import { Button } from 'antd';

interface BankAccountItemProps {
	index: number;
}
export const BankAccountItem = (props: BankAccountItemProps) => {
	const { index } = props;

	return (
		<tr className="desktop-bank-account-list-screen__bank-account-list__bank-account-item" style={{ lineHeight: 5 }}>
			<td>{index}</td>
			<td style={{ textAlign: 'left' }}>Lorem ipsum</td>
			<td>001273230</td>
			<td>Totam rem</td>
			<td>Ut enim ad minima veniam</td>
			<td>
				<Button className="desktop-bank-account-list-screen__bank-account-list__bank-account-item__remove-btn">
					Remove
				</Button>
			</td>
		</tr>
	);
};
