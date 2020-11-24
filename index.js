import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CharacterCounterInput = ({ text, defaults }) => {

	const maxLength = 280
	const [mood, setMood] = useState("");

	
	return (
		<div className={`counterInput ${mood.length > maxLength && "tooLong"}`}>
			<div>
				{defaults.map(b => {
					return <button onClick={() => setMood(b)} key={b}>{b}</button>;
				})}
			</div>
			<textarea name="mood" value={mood} onChange={(e) => setMood(e.target.value)} placeholder={text} />
			<div>{mood.length}/{maxLength}</div>
		</div>
	);
};

const App = () => {
	let defaultMoods = ['Great', 'Okay', 'Bad'];

	return (
		<section>
			<h2>Mood Tracker</h2>
			<CharacterCounterInput text={'How was your day?'} defaults={defaultMoods} />
		</section>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
