import { configureStore } from '@reduxjs/toolkit';
import rootRecuders from './reducers';

export default configureStore({
    reducer: rootRecuders,
});