// Forms using useState
// useState better for instant validation and resetting input

import { useState } from 'react';
const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const enteredEmailIsValid =
		enteredEmail.trim() !== '' && enteredEmail.includes('@');
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};

	const nameInputBlurHandler = (e) => {
		setEnteredNameTouched(true);
	};

	const emailInputChangeHandler = (e) => {
		setEnteredEmail(e.target.value);
	};

	const emailInputBlurHandler = (e) => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouched(true);
		setEnteredEmailTouched(true);

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}

		console.table(enteredName, enteredEmail);
		setEnteredName('');
		setEnteredNameTouched(false);

		setEnteredEmail('');
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className='error-text'>Name must not be empty!</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>Your E-Mail Address</label>
				<input
					type='email'
					id='email'
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emailInputIsInvalid && (
					<p className='error-text'>Email isn't valid!</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
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
