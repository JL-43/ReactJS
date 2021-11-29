import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const increaseBy = 10;
	const decreaseBy = 10;

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};
	const increaseHandler = () => {
		dispatch(counterActions.increase(increaseBy));
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};
	const decreaseHandler = () => {
		dispatch(counterActions.decrease(decreaseBy));
	};
	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
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
