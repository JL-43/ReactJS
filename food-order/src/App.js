import React, { useState } from 'react';

import Header from '../src/components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	// const showCartHandler = () => {
	// 	setCartIsShown(true);
	// };

	// const hideCartHandler = () => {
	// 	setCartIsShown(false);
	// };

	// Turo ni bhosxzc Aethan "Petmalu" Ilagan
	const toggleCartHandler = () => {
		setCartIsShown(!cartIsShown);
	};

	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={toggleCartHandler} />}
			<Header onShowCart={toggleCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
