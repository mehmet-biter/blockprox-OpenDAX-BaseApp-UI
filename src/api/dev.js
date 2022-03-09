if (process.env.NODE_ENV === 'development') {
	window.env = {
		api: {
			airdropUrl: 'https://ex.udonex.com/api/v2/airdrop',
			// airdropUrl: 'http://localhost:5000/api',
			applogicUrl: 'http://localhost:9002/api/v2/applogic',
			authUrl: 'http://localhost:9002/api/v2/barong',
			finexUrl: 'http://localhost:9002/api/v2/finex',
			ieoAPIUrl: 'https://ex.udonex.com/api/v2/ieo',
			rangerUrl: 'ws://localhost:9003/api/v2/ranger',
			referralUrl: 'https://ex.udonex.com/api/v2/referral',
			stakeUrl: 'https://ex.udonex.com/api/v2/stake',
			sunshineUrl: 'https://ex.udonex.com/api/v2/sunshine',
			tradeUrl: 'https://ex.udonex.com/api/v2/udonex',
			walletUrl: 'http://localhost:4000/api',
			transactionUrl: 'http://localhost:4000/api',
			statisticUrl: 'http://localhost:4000/api',
			competitionUrl: 'https://ex.udonex.com/api/v2/competition',
			paypalUrl: 'http://localhost:4000/api',
			newKycUrl: 'http://localhost:9002/api/v2/newKyc',
			bannerUrl: 'http://localhost:4000/api',
			announcementUrl: 'https://ex.udonex.com/api/v2/announcement',
			withdrawLimitUrl: 'http://localhost:9002/api/v2/withdrawLimit',
		},
		minutesUntilAutoLogout: '5',
		withCredentials: false,
		gaTrackerKey: '',
		rangerReconnectPeriod: '1',
		msAlertDisplayTime: '5000',
		incrementalOrderBook: true,
		finex: true,
		isResizable: false,
		isDraggable: false,
		languages: ['en', 'ru'],
		sessionCheckInterval: '15000',
		balancesFetchInterval: '3000',
		passwordEntropyStep: 14,
		showLanding: true,
		sentryEnabled: false,
		kycSteps: ['email', 'phone', 'profile', 'document', 'address'],
	};
}
