import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../utils/reducers'; 

const store = configureStore({
  reducer: {
    data: dataReducer, 
  },
});

export default store;
