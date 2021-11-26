import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);

	const increaseBy = 10;
	const decreaseBy = 10;

	const incrementHandler = () => {
		dispatch({ type: 'increment' });
	};
	const increaseHandler = () => {
		dispatch({ type: 'increase', amount: increaseBy });
	};
	const decrementHandler = () => {
		dispatch({ type: 'decrement' });
	};
	const decreaseHandler = () => {
		dispatch({ type: 'decrease', amount: decreaseBy });
	};
	const toggleCounterHandler = () => {
		dispatch({ type: 'toggle' });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>

			{showCounter && <div className={classes.value}>{counter}</div>}

			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>
					Increase by {increaseBy}
				</button>
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={decreaseHandler}>
					Decrease by {decreaseBy}
				</button>
			</div>

			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
