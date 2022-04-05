import React from 'react';
import { Button } from 'antd';

export const BankAccountItem = () => {
	return (
		<div className="pg-mobile-profile-bank-accounts-item">
			<div className="pg-mobile-profile-bank-accounts-item__header d-flex flex-row justify-content-between align-items-center">
				<span>Lorem ipsum</span>
				<Button className="pg-mobile-profile-bank-accounts-item__header__button">
					<svg width="15" height="15" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.59863 4.35889L7.55176 2.40576C7.80566 2.17139 7.80566 1.78076 7.55176 1.54639L7.12207 1.1167C6.8877 0.862793 6.49707 0.862793 6.2627 1.1167L4.30957 3.06982L2.33691 1.1167C2.10254 0.862793 1.71191 0.862793 1.47754 1.1167L1.04785 1.54639C0.793945 1.78076 0.793945 2.17139 1.04785 2.40576L3.00098 4.35889L1.04785 6.33154C0.793945 6.56592 0.793945 6.95654 1.04785 7.19092L1.47754 7.62061C1.71191 7.87451 2.10254 7.87451 2.33691 7.62061L4.30957 5.66748L6.2627 7.62061C6.49707 7.87451 6.8877 7.87451 7.12207 7.62061L7.55176 7.19092C7.80566 6.95654 7.80566 6.56592 7.55176 6.33154L5.59863 4.35889Z"
							fill="#C22603"
						/>
					</svg>
					<span>Remove </span>
				</Button>
			</div>
			<div className="pg-mobile-profile-bank-accounts-item__body-content">
				<span className="pg-mobile-profile-bank-accounts-item__body-content__label">Account Number</span>
				<span className="pg-mobile-profile-bank-accounts-item__body-content__content">001273230</span>
			</div>
			<div className="pg-mobile-profile-bank-accounts-item__body-content">
				<span className="pg-mobile-profile-bank-accounts-item__body-content__label">Bank Name</span>
				<span className="pg-mobile-profile-bank-accounts-item__body-content__content">Totam rem</span>
			</div>
			<div className="pg-mobile-profile-bank-accounts-item__body-content">
				<span className="pg-mobile-profile-bank-accounts-item__body-content__label">Bank Address</span>
				<span className="pg-mobile-profile-bank-accounts-item__body-content__content">Ut minim</span>
			</div>
		</div>
	);
};
