function applyEventWhenNecessary() {
	var set, fixedAnswers, emojiOverwrite;
	switch (hash) {
		case '1-3': // saint david day
			set = coloursPantoneFHI;
			fixedAnswers = [
				'Leek Green',
				'Mountain View',
				'Daffodil',
				'Dragon Fire',
				'Lambs Wool',
			];
			emojiOverwrite = ['🐉'];
			break;
		case '17-3': // saint patrick day
			set = coloursPantoneFHI;
			fixedAnswers = [
				'Irish Green',
				'Shamrock',
				'Blarney',
				'Kelly Green',
				'Irish Cream',
			];
			emojiOverwrite = ['☘️'];
			break;
		case '23-4': // saint george day
			set = coloursPantoneFHI;
			fixedAnswers = [
				'English Rose',
				'English Manor',
				'English Ivy',
				'English Lavendar',
				'Royal Blue',
				'London Fog',
				'Dragon Fire',
			];
			emojiOverwrite = ['🐉'];
			break;
		case '24-6': // marie birthday
			set = coloursPantoneFHI;
			fixedAnswers = [
				'Marine Blue',
				'Maritime Blue',
				'Mazarine Blue',
				'Ultramarine',
				'Deep Ultramarine',
				'Aquamarine',
			];
			emojiOverwrite = ['💙'];
			break;
		case '14-7': // bastille day
			set = coloursPantoneFHI;
			fixedAnswers = [
				'Provence',
				'Limoges',
				'Bijou Blue',
				'Parisian Blue',
				'French Blue',
				'Parisian Night',
				'Eiffel Tower',
				'French Roast',
				'French Vanilla',
			];
			emojiOverwrite = ['🥐','🥖'];
			break;
		case '29-7': // robson birthday
			set = coloursCrayola;
			fixedAnswers = [
				'Wisteria',
				'Vivid Violet',
				'Royal Purple',
				'Purple Heart',
				'Maximum Red Purple',
				'Maximum Purple',
				'Plum',
				'Purple Mountains\' Majesty',
				'Maximum Blue Purple'
			];
			emojiOverwrite = ['💜'];
			break;
		case '31-10': // halloween
			set = coloursPantoneFHI;
			fixedAnswers = [
				'Phantom',
				'Pumpkin Spice',
				'Midnight',
				'Pumpkin',
				'Purple Magic',
				'Nightshadow Blue',
				'Pureed Pumpkin',
				'Harvest Pumpkin',
				'Ghost Gray',
				'Moonlight',
			];
			emojiOverwrite = ['🎃'];
			break;
		case '5-11': // guy fawkes night
			set = coloursPantoneFHI;
			fixedAnswers = [
				'Firecracker',
				'Flame',
				'Powder Blue',
				'Powder Pink',
				'Flame Scarlet',
			];
			emojiOverwrite = ['🧨','💥'];
			break;
		case '25-12': // christmas
			set = coloursPantoneFHI;
			fixedAnswers = [
				'Winter White',
				'Mistletoe',
				'Holly Berry',
				'Tinsel',
				'Ribbon Red'
			];
			emojiOverwrite = ['🎅','🎄','🤶','⛄'];
			break;
		default:
			return null
	}
	shuffleArray(fixedAnswers);
	return { set: set, fixedAnswers: fixedAnswers, emojiOverwrite: emojiOverwrite }
}