import useInput from '../hooks/use-input';

const BasicForm = (props) => {
	const {
		value: enteredFname,
		isValid: fnameIsValid,
		hasError: fnameHasError,
		valueChangeHandler: fnameChangeHandler,
		inputBlurHandler: fnameBlurHandler,
		reset: resetFname,
	} = useInput((v) => v.trim() !== '');
	const {
		value: enteredLname,
		isValid: lnameIsValid,
		hasError: lnameHasError,
		valueChangeHandler: lnameChangeHandler,
		inputBlurHandler: lnameBlurHandler,
		reset: resetLname,
	} = useInput((v) => v.trim() !== '');
	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput((v) => v.includes('@'));

	let formIsValid = false;
	if (fnameIsValid && lnameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (!fnameIsValid || !lnameIsValid || !emailIsValid) {
			return;
		}

		console.table(enteredFname, enteredLname, enteredEmail);
		resetFname('');
		resetLname('');
		resetEmail('');
	};

	const fnameInputClasses = fnameHasError
		? 'form-control invalid'
		: 'form-control';
	const lnameInputClasses = lnameHasError
		? 'form-control invalid'
		: 'form-control';
	const emailInputClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className='control-group'>
				<div className={fnameInputClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						onChange={fnameChangeHandler}
						onBlur={fnameBlurHandler}
						value={enteredFname}
					/>
					{fnameHasError && (
						<p className='error-text'>Input is not valid!</p>
					)}
				</div>
				<div className={lnameInputClasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						onChange={lnameChangeHandler}
						onBlur={lnameBlurHandler}
						value={enteredLname}
					/>
					{lnameHasError && (
						<p className='error-text'>Input is not valid!</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='email'
					id='name'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailHasError && (
					<p className='error-text'>Input is not valid!</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
