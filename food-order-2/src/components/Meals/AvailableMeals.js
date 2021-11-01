import React, { useState, useCallback, useEffect } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const REQUEST_URL =
	'https://react-http-4ef3a-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json';

// const DUMMY_MEALS = [
// 	{
// 		id: 'm1',
// 		name: 'Sushi',
// 		description: 'Finest fish and veggies',
// 		price: 22.99,
// 	},
// 	{
// 		id: 'm2',
// 		name: 'Schnitzel',
// 		description: 'A german specialty!',
// 		price: 16.5,
// 	},
// 	{
// 		id: 'm3',
// 		name: 'Barbecue Burger',
// 		description: 'American, raw, meaty',
// 		price: 12.99,
// 	},
// 	{
// 		id: 'm4',
// 		name: 'Green Bowl',
// 		description: 'Healthy...and green...',
// 		price: 18.99,
// 	},
// ];

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const fetchMealsHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const res = await fetch(REQUEST_URL);
			if (!res.ok) {
				throw new Error('Something went wrong!');
			}

			const data = await res.json();

			const loadedMeals = [];

			for (const key in data) {
				loadedMeals.push({
					id: key,
					key: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}

			setMeals(loadedMeals);
		} catch (e) {
			setError(e.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMealsHandler();
	}, [fetchMealsHandler]);

	const mealsList = meals.map(({ id, name, description, price }) => {
		return (
			<MealItem
				id={id}
				key={id}
				name={name}
				description={description}
				price={price}
			/>
		);
	});

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
