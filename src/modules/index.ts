import { combineReducers } from 'redux';
import color from './color';
import signin from './signin';

const rootReducer = combineReducers({
  color,
  signin
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
