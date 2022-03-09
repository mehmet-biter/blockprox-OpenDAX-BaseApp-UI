import loadingGif from 'assets/images/loading.gif';
import React from 'react';

export const LoadingGif = (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
	return (
		<img
			style={{
				width: '7rem',
				height: '10rem',
			}}
			src={loadingGif}
			alt="loading"
			{...props}
		></img>
	);
};
