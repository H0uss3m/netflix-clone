import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/reducers';

export default configureStore({
  reducer
});
