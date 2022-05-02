import React from 'react';
import { useHistory } from 'react-router-dom';
interface LinkCustomProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	to: string;
}

export const Link: React.FC<LinkCustomProps> = props => {
	const { to } = props;
	const history = useHistory();
	return (
		<a
			{...props}
			onClick={e => {
				e.preventDefault();
				history.push(to);
				props.onClick && props.onClick(e);
			}}
		>
			{props.children}
		</a>
	);
};
