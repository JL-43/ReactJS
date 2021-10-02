import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();

		//checking for invalid inputs
		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0 ||
			+enteredAge < 1
		) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age',
			});
			return;
		}

		// Pass data to App component
		props.onAddUser(enteredUsername, enteredAge);

		// reset data after submit
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(false);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				></ErrorModal>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>
					<label htmlFor='age'>Age</label>
					<input
						id='age'
						type='text'
						value={enteredAge}
						onChange={ageChangeHandler}
					/>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
