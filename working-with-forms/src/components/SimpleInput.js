// Forms using useState
// useState better for instant validation and resetting input
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangeHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes('@'));

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}

		console.table(enteredName, enteredEmail);
		resetNameInput();
		resetEmailInput();
	};

	const nameInputClasses = nameInputHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					onChange={nameChangeHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className='error-text'>Name must not be empty!</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>Your E-Mail Address</label>
				<input
					type='email'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailInputHasError && (
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
