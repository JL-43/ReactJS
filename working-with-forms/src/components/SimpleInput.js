// Forms using useState
// useState better for instant validation and resetting input

import { useState } from 'react';
const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};
	const formSubmissionHandler = (e) => {
		e.preventDefault();
		if (enteredName.trim() === '') {
			return;
		}

		console.log(enteredName);
		setEnteredName('');
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className='form-control'>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	);
};
export default SimpleInput;

// Forms using useRef

// import { useRef } from 'react';

// const SimpleInput = (props) => {
// 	const nameInputRef = useRef();

// 	const formSubmissionHandler = (e) => {
// 		e.preventDefault();

// 		const enteredValue = nameInputRef.current.value;
// 		console.log(enteredValue);
// 	};

// 	return (
// 		<form onSubmit={formSubmissionHandler}>
// 			<div className='form-control'>
// 				<label htmlFor='name'>Your Name</label>
// 				<input ref={nameInputRef} type='text' id='name' />
// 			</div>
// 			<div className='form-actions'>
// 				<button>Submit</button>
// 			</div>
// 		</form>
// 	);
// };

// export default SimpleInput;
