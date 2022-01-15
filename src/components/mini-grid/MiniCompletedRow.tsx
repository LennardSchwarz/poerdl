import {getGuessStatuses} from '../../lib/statuses';

type Props = {
	guess: string;
};

export const MiniCompletedRow = ({guess}: Props) => {
	const statuses = getGuessStatuses(guess);

	return (
		<div className="flex justify-center">
			{guess.split('').map((_, i) => {
				switch (statuses[i]) {
					case 'correct':
						return '🟩';
					case 'present':
						return '🟨';
					default:
						return '⬜';
				}
			})}
		</div>
	);
};
