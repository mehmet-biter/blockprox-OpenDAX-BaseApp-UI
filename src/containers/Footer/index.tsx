import * as React from 'react';
import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
const Logo = require('../../assets/images/UdonLogo.svg');

export const Footer: React.FC = Props => {
	const history = useHistory();

	const [emailAddress, setemailAddress] = useState('');

	const inputEmail = (e: any) => {
		setemailAddress(e.target.value);
	};

	const sendEmail = () => {
		const valueEmail = emailAddress;
		// do something
		setemailAddress(valueEmail);
	};

	if (history.location.pathname.startsWith('/confirm')) {
		return <React.Fragment />;
	}

	return <React.Fragment>{renderFooterDesktop(inputEmail, sendEmail, emailAddress)}</React.Fragment>;
};

const renderFooterDesktop = (inputEmail, sendEmail, emailAddress) => {
	// const valueInput: string = emailAddress;

	return (
		<div className="footerDesktop-screen">
			<div className="container-footer-screen">
				<div className="footer d-flex flex-row justify-content-between ">
					<div className="footer__logo">
						<Link className="footer__logo__img" to="/">
							<img
								src={Logo}
								alt="logo"
								style={{
									width: '50%',
								}}
							/>
						</Link>
						<p className="footer__info__item mt-5 mb-5">
							BlockProEx is a group of crypto enthusiasts which aims to provide the most
							<br /> secure and safe cryptocurrency trading application. Blockproex aims to
							<br />
							eradicate all the drawbacks of peer trading platforms and give the best
							<br /> service in the segment to its global investors
						</p>
						{/* <p className="footer__info__title">Follow us</p>
						<div className="footer__news__list-icon ">
							<div className="footer__news__list-icon__item  ">
								<a href="#" target="blank">
									<img src={Twiter} alt="twiter" />
								</a>
							</div>
							<div className="footer__news__list-icon__item  ">
								<a href="#" target="blank">
									<img src={Telegram} alt="telegram" />
								</a>
							</div>
						</div> */}
					</div>
					<div className="footer__info">
						<p className="footer__info__title">CONTACT</p>
						<div style={{ borderBottom: '2px solid var(--yellow)', width: 50, marginBottom: 20 }}></div>
						<p className="footer__info__item">
							<FaPhoneAlt className="footer__info__item__icon" /> 1800 266 5075
						</p>
						<p className="footer__info__item">
							<FaEnvelope className="footer__info__item__icon" /> support@blockproex.in
						</p>
					</div>
					<div className="footer__news">
						<p className="footer__news__title">QUICK LINKS</p>
						<div style={{ borderBottom: '2px solid var(--yellow)', width: 50, marginBottom: 20 }}></div>
						<p className="footer__info__item">
							<Link to="/Markets">Markets</Link>
						</p>
						<p className="footer__info__item">
							<Link to="/ieo">Launchpad</Link>
						</p>
						<p className="footer__info__item">
							<Link to="/competition">Competition</Link>
						</p>
						<p className="footer__info__item">
							<Link to="/stake">Stake</Link>
						</p>
						<p className="footer__info__item">
							<Link to="/promotion">Promotion</Link>
						</p>
					</div>
					<div className="footer__info">
						<p className="footer__info__title">SERVICE SUPPORT</p>
						<div style={{ borderBottom: '2px solid var(--yellow)', width: 50, marginBottom: 20 }}></div>
						<p className="footer__info__item">
							<Link to="/fee">Asset Fee </Link>
						</p>
						<p className="footer__info__item">
							<Link to="/announcement">Announcements </Link>
						</p>
						<p className="footer__info__item">
							<a href="https://forms.gle/hk2PLrYjzM7YymRv9" target="blank">
								Submit Trade Listing
							</a>
						</p>
						<p className="footer__info__item">
							<a href="https://forms.gle/whyECtGR999zdM9s5" target="blank">
								Submit IEO Listing
							</a>
						</p>
						<p className="footer__info__item">
							<a href="https://forms.gle/XWT7mgzaXAfriA7J8" target="blank">
								Submit Vote Listing
							</a>
						</p>
						<p className="footer__info__item">
							<a href="https://api.udonex.com" target="blank">
								API Documentation
							</a>
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className="white-line"></div>
				<p className="footer__copyright">
					BlockProEx Exchange © 2021 <span className="text-primary">https://www.blockproex.in</span> All rights
					reserved.
				</p>
			</div>
		</div>
	);
};
