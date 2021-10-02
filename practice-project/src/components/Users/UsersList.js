import React from 'react';

import Card from '../UI/Card';

import classes from './UsersList.module.css';

const UsersList = (props) => {
	return (
		<Card className={classes.users}>
			<ul>
				{props.users.map((user) => (
					<li key={user.id}>
						{/* React expects a key to render lists effectively*/}
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
