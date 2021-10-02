import React from 'react';

import classes from './Input.module.css';

const Input = ({ label, input }) => {
	return (
		<div className={classes.input}>
			<label htmlFor={input.id} className={classes.label}>
				{label}
			</label>
			<input {...input} />
		</div>
	);
};

export default Input;
