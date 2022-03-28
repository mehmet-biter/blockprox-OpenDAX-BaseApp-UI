import React from 'react';
import { BankAccountItem } from 'plugins/Bank/components';

export const BankAccountList = () => {
	return (
		<div className="desktop-bank-account-list-screen__bank-account-list">
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th style={{ textAlign: 'left' }}>Name</th>
						<th>Account Number</th>
						<th>Bank Name</th>
						<th>Bank Address</th>
						<th>-</th>
					</tr>
				</thead>
				{/* Render Bank Account List Items  */}
				<tbody>
					{Array(9)
						.fill(null)
						.map((bankAccount, index) => (
							<BankAccountItem index={index + 1} />
						))}
				</tbody>
			</table>
		</div>
	);
};
