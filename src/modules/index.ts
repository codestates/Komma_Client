import { combineReducers } from 'redux';
import color from './color';
import signin from './signin';
import timer from './timer';

const rootReducer = combineReducers({
  color,
  signin,
  timer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
