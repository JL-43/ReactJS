import { configureStore } from '@reduxjs/toolkit';

import counter from './counter';
import auth from './auth';

const store = configureStore({
	reducer: { counter: counter.reducer, auth: auth.reducer },
});

export default store;
