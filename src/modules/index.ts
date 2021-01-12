import { combineReducers } from 'redux';
import color from './color';

const rootReducer = combineReducers({
  color
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
